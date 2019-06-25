---
id: 1822
title: Einführung in JavaScript Promise
date: 2017-05-25T14:30:12+00:00
author: Rathes Sachchithananthan
image: /images/blog/javascript-promise.png
categories:
  - Web
tags:
  - Frontendentwicklung
  - JavaScript
template: post
description: Promises in JavaScript sind ein mächtiges Feature, dass die Arbeit mit asynchronem Code sehr vereinfacht. Ich möchte dich in diesem Beitrag in die Welt der Promises einführen.
locale: de_DE
---

Promises in JavaScript sind ein mächtiges Feature, dass die Arbeit mit asynchronem Code sehr vereinfacht. Ich möchte dich in diesem Beitrag in die Welt der Promises einführen.

<!--more-->

Gerade wenn du dich im Bereich der Web-App Entwicklung herumtreibst, wirst du im das Thema asynchrone Requests nicht herumkommen. Denn du wirst in der Regel sehr viele Anfragen an eine API machen, die nicht synchron laufen werden. Wenn du zum Beispiel das Package Axios einsetzt (welche ich in meinem Beitrag zur Einführung in Vuex bereits erwähnt habe), dann wirst du sehr oft Code wie Folgenden gemacht haben.

```javascript
axios.get('https://domain.tld/api/xyz')
  .then((response) => {
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
```

Das ist ein sehr gutes Beispiel für einen Promise im Einsatz. Du führst eine asynchrone Anfrage durch und wartest auf ein Resultat. Und sobald das Resultat da ist, kannst du je nach Erfolg oder Misserfolg mit diesem Resultat weiterarbeiten.

## Warum das Ganze?

Aber fangen wir lieber ganz von vorne an. Die erste Frage, die beantwortet werden muss, ist die nach dem Sinn. JavaScript ist bekannterweise single-threaded, das heißt es können nicht mehrere Skripte parallel, sondern immer nur sequentiell hintereinander ausgeführt werden.

Während synchroner, sequentiell ausgeführter Code sehr einfach zu verfolgen ist, sind wir bei asynchronem Code in der Regel viel flexibler und performanter. Wir müssen nicht die ganze Zeit warten bis eine einfache (API-)Anfrage durchgelaufen ist und dann erst den Rest der Webseite aufbauen (und so den Benutzer verärgern und gar verlieren), sondern können mehrere Aufrufe auf einmal anwerfen und diese einzeln abarbeiten sobald diese fertig sind. Wie bereits am Anfang erwähnt ist das Thema gerade beim Thema Web-Apps sehr interessant.

## Begriffe beim Thema Promise

Du wirst auf einige Begriffe stoßen, wenn du dich mit dem Thema befasst und dich auch auf anderen Webseiten einliest. Diese sind zwar nicht komplex, aber man kann schnell mal welche durcheinander bringen.

Ein Promise kann die folgenden einen der folgenden drei Zustände haben:

  * pending: Der ursprüngliche Status, weder ausgeführt noch abgebrochen
  * fulfilled: Die Operation wurde erfolgreich ausgeführt
  * rejected: Operation fehlgeschlagen

Außerdem wirst du auf die zwei Begriffe resolve und reject stoßen, welche ich dir in weiteren Verlauf näher erläutern werde.

## Simpler Einsatz von Promises

Ein einfacher Promise sieht wie folgt aus:

```javascript
function myAsyncRequest (uri) {
  return new Promise((resolve, reject) => {
    
    let image = new Image();
    
    image.onload = function () {
      resolve(image);
    }

    image.onerror = function () {
      reject(new Error('Could not load image with URI ' + uri));
    }

    image.src = uri;    
  });
}

myAsyncRequest("https://this.is.my/uri/to/my/image.jpg")
  .then((image) => {
    console.log(image);
  })
  .catch((error) => {
    console.log(error);
  })
```

Einen Promise erzeugst du mit dem Konstruktor `new Promise()` der wiederum eine Funktion als Parameter beinhaltet. Diese Funktion hat die Variablen resolve und reject (die beiden Begriffe, die ich bereits oben erwähnt habe). Diese beiden Funktionen werden im Code auch ausgeführt. Die Funktion `resolve` wird immer dann benutzt, wenn die Aktion als erfolgreich deklariert werden soll, `reject` markiert, dass etwas nicht erfolgreich war.

An diesen Promise kann man nun die Funktionen `.then()` und `.catch()` anhängen und so die beiden Fälle abfangen. Ganz einfach oder?

## Promise Chaining

Die `.then()` Funktion eines Promises liefert immer wieder einen weiteren Promise aus, sodass wir weitere `.then()` Funktionen an diesen Promise anhängen können.

```javascript
myAsyncRequest("https://this.is.my/uri/to/my/image.jpg")
  .then((image) => {
    console.log(image);
    return { src: image.src, width: image.width, height: image.height }
  })
  .then((data) => {
    console.log(data.height);
    console.log(data.width);
    console.log(data.src);
  })
  .catch((error) => {
    console.log(error);
  })
```

Die erste Funktion liefert ein Objekt zurück, das die Daten des Bildes beinhaltet. Dieses können wir ganz einfach in einem weiteren `.then()` abgreifen und weiterverarbeiten.

## Promise auflösen

Anders als oben gezeigt, muss das catch nicht unbedingt am Ende dieser Kette stehen. Stellen wir uns bei diesem Beispiel vor, dass wir ein "Dummy-Bild" anzeigen wollen, wenn das Bild nicht geladen werden konnte. Das würde dann wie folgt aussehen:

```javascript
myAsyncRequest("https://this.is.my/uri/to/my/image.jpg")
  .catch((error) => {
    console.log(error);
    let notFoundImage = new Image()
    notFoundImage.src = "./some/path/dummy.png"
    return notFoundImage
  })
  .then((image) => {
    console.log(image);
    return { src: image.src, width: image.width, height: image.height }
  })
  .then((data) => {
    console.log(data.height);
    console.log(data.width);
    console.log(data.src);
  })
```

Man kann sogar einen weiteren Promise in dem auflösenden `.then()` zurückgeben, welcher dann vor dem nächsten `.then()` ausgeführt wird.

```javascript
myAsyncRequest("https://this.is.my/uri/to/my/image.jpg")
  .catch((error) => {
    console.log(error);
    return myAsyncRequest("./some/path/dummy.png")
  })
  .then((image) => {
    console.log(image);
    return { src: image.src, width: image.width, height: image.height }
  })
  .then((data) => {
    console.log(data.height);
    console.log(data.width);
    console.log(data.src);
  })
```

## Promise.all()

Bisher hast du immer nur ein Bild asynchron geladen. Was aber, wenn du mehr als nur eines laden willst? Und erst dann eine Aktion ausführen willst, wenn alle Bilder geladen wurden?

Der erste Gedanke wäre eine sehr lange Kette und am Ende dieser Kette im letzten `.then()` dann die Aktion. Es geht aber definitiv einfacher:

```javascript
var urls = ['https://my.tld/one.jpg', 'https://my.tld/two.png', 'https://my.tld/three.png'];
let promises = urls.map(myAsyncRequest);

Promise.all(promises)
 .then(function(images) {
 console.log('All images loaded', images);
 })
 .catch(function(err) {
 console.error(err);
 });
```

Wenn man `Promise.all()` einen Array an Promises übergeben, wartet dieser ab, bis alle geladen werden und geht dann erst in die nächste `.then()` Funktion.

---

Wie du siehst sind Promises gar nicht so schwer zu verstehen und trotzdem sehr hilfreich. Promises sind seit ES2015 Standard und [werden auch von allen aktuellen Browsern unterstützt](https://caniuse.com/#feat=promises). (Der IE11 ist kein aktueller Browser mehr).

Die Promises selbst haben bereits eine Erweiterung erfahren. Mit [Async/Await](https://developers.google.com/web/fundamentals/getting-started/primers/async-functions) werden sogar die .then() überflüssig gemacht bzw. vereinfacht, aber das ist dann wohl Stoff für einen weiteren Beitrag.