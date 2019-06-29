---
id: 1811
title: Den Laravel Code mit dem Repository Pattern entkoppeln
date: 2017-04-15T17:09:27+00:00
author: Rathes Sachchithananthan
template: post
image: ../../images/blog/repository-pattern-laravel.png
categories:
  - Featured
  - Web
tags:
  - Laravel
  - Webentwicklung
locale: de_DE
description: Ich zeige dir, wie du das Repository Pattern in Laravel anwendest und damit deinen Code noch besser machst.
---

Mit der regelmäßigen Weiterentwicklung einer Laravel Webanwendung steigt auch die Komplexität dieser. Um trotzdem einen sauberen Code zu haben, lohnt es sich die Software regelmäßig zu überarbeiten und zu optimieren. Ein Muster, das dir die Arbeit des Refactoring erheblich erleichtern kann, ist das Repository Pattern.

<!--more-->

Wenn dir dieser Begriff nichts sagt, ist dieser Artikel genau richtig für dich. Ich erkläre dir, was genau dieses Repository Pattern genau ist, wie man dieses Muster in Laravel implementiert und warum diese Implementierung sinnvoll und hilfreich sein kann.

## Was ist das Repository Pattern?

Das Repository Pattern macht nichts anderes als die Logik für den Datenzugriff von der Anwendungslogik zu separieren. Im klassischen MVC Modell bringt das Repository Pattern einen zusätzlichen Layer zwischen Model und Controller ins Spiel, um so beide Bereiche zu entkoppeln.

Der zusätzliche Layer im Repository Pattern beinhaltet sämtliche Logik wie auf Daten zugegriffen werden kann. Diese Logik wird vom Controller benutzt. Dieser weiß aber nicht wie auf die Daten in Wirklichkeit zugegriffen wird, da er komplett vom Daten-Layer isoliert ist.

Ein Repository ist im Prinzip eine Klasse, die Zugriffe auf die Datenquellen hat und diese auf eine bestimmte Art und Weise ausgibt. Diese Repositories werden dann für die Implementierung der Anwendungslogik verwendet. Bei dieser Implementierung ist der Anwendungslogik absolut egal wie die Datenquelle aussieht. Das heißt, diese kann auch beliebig ausgetauscht werden. Man muss dann nur noch das Repository anpassen und muss nicht mehr alle Stellen in der Businesslogik suchen, um die Datenquelle anzupassen.

!["Repository Pattern Skizze"](../../images/blog/repository-pattern-skizze.png "Das Repository Pattern ist ein Layer zwischen Daten und Businesslogik")

## Repository Pattern und Laravel

Das Repository Pattern ist ein Software Development Muster, dass unabhängig von Programmiersprache oder gar Framework ist, daher gibt es auch einige Möglichkeiten wie man dieses Muster in sein eigenes Projekt implementieren kann. Ich zeige dir hier eine von mehreren Möglichkeiten. Wie du das für deine Anwendung implementierst hängt auch ganz davon ab wie deine Applikationsstruktur aussieht.

Ich zeige dir hier eine einfach Umsetzung bei einer frisch aufgesetzten Laravel-Instanz:

### Repository und RepositoryInterface

Nehmen wir an, dass wir ein Blogsystem entwickeln wollen. Im ersten Schritt brauchen wir also einen Controller, der alle Blogbeiträge ausgibt. Der Code würde normal ähnlich wie Folgender aussehen:

```php
<?php
namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    public function index ()
    {
        $posts = Post::all();
        return view('post.index', ['posts' => $posts]);
    }
}
```

Diesem Stück Code wollen wir nun das Repository Pattern zwischen schieben. Dafür legen wir als erstes Repository für das Post-Model an. Ich lagere die Repositories immer in `App\Repositories`. Du kannst hier aber selbst entscheiden, wo die Repositories abgelegt werden sollen. Im Folgenden musst du dann nur die Namespaces dementsprechend anpassen.

Das Repository soll uns erstmal nur eine Aufgabe erledigen, nämlich alle Posts ausgeben, die existieren. Daher sieht das Repository folgendermaßen aus:

```php
<?php
namespace App\Repositories;

use App\Models\Post;

class PostRepository
{
    public function all ()
    {
        return Post::all();
    }
}
```

Hiermit hätten wir direkt das Post-Model aus unserem Controller ins das Repository verlagert. Im selben Atemzug legen wir in `App\Interfaces\RepositoryInterfaces` eine Datei names PostRepositoryInterface an und definieren hier die Funktion `all()`.

```php
<?php
namespace App\Interfaces\RepositoryInterfaces;

interface PostRepositoryInterface
{

   /**
    * returns all posts
    *
    * @return mixed
    */
    public function all();

}
```

Warum legen wir hier ein Interface an? Mit diesem Interface stellen wir sicher, dass spätere PostRepository-Implementierungen auch alle die Funktion all() besitzen. Natürlich solltest du nicht vergessen die PostRepository Klasse dementsprechend auszuzeichnen `class PostRepository implements PostRepositoryInterface`

### Controller kommuniziert mit Repository

Jetzt haben wir unser Repository umgesetzt und können dies in unserem Controller benutzen. Dafür bauen wir diesen ein wenig um. Als Erstes laden wir uns das Repository über den Konstruktor ins den Controller, um nicht jedes Mal das Repository initiieren zu müssen. Als nächstes ersetzen wir die `Post::all()` Funktion mit der Funktion des Repositories.

```php
<?php
namespace App\Http\Controllers;

use App\Repositories\PostRepository;
use App\Http\Controllers\Controller;

class PostsController extends Controller
{
    protected $post;

    public function __construct(PostRepository $post)
    {
        $this->post = $post;
    }

    public function index ()
    {
        $posts = $this->post->all();
        return view('post.index', ['posts' => $posts]);
    }
}
```

Dank Laravel müssen wir im Konstruktur für die Variable \$post nur einen einfachen Type-Hint setzen. [Laravel's Service Container löst dann die Dependency automatisch auf](https://laravel.com/docs/5.4/container#automatic-injection) und erzeugt das passende Objekt.

So gehen wir nun also für alle weiteren Stellen vor, wo wir Daten aus der Datenbank abgreifen müssen. Wir definieren die Funktion im Interface und implementieren diese dann im Repository und rufen dann in unseren Controllern die Funktion über das Repository auf.

## Warum das Repository?

Eine Frage steht hier noch im Raum. Wenn wir im Repository eh nur die Funktionen vom Eloquent Model aufrufen, warum machen wir das nicht direkt im Controller? Blähen wir das Projekt nicht mit den Repositories und deren Interfaces nur auf?

Diese Frage möchte ich dir mit einem kleinen Beispiel beantworten: Stell dir vor du hast unser kleines Projekt hier oben weiterentwickelt. Du hast 12 Controller, 27 Event-Handler und sogar einen Cronjob, der dein Post-Model beeinflusst. Du hast also munter vor dich hingearbeitet. Doch plötzlich stößt du auf ein Problem und die Lösung für dieses Problem ist, dass du deine Datenbank von MySQL mit Eloquent auf MongoDB umstellen musst.

Wenn du ohne das Repository Pattern gearbeitet hättest, würdest du an dieser Stelle nun jede einzelne Zeile der 12 Controller und 27 Event-Handler durchgehen müssen und an den entsprechenden Stellen den Code so umbauen, dass es für MongoDB passt. Und wenn du doch ein anderes System benötigst, ginge der Spaß wieder von vorne los. Beim Repository Pattern sparst du dir das alles und schreibst einfach nur ein neues Repository, dass dein PostRepositoryInterface implementiert und sorgst auf Anhieb dafür, dass die Anwendungslogik funktioniert.

## Das Repository über den Service Container injizieren

Bisher haben wir in unserem Controller das Repository direkt injiziert. Stell dir aber mal das Szenario vor, dass du ein Package entwickelst. Dieses benutzt out-of-the-box ein Repository, dass mit Eloquent arbeitet. Ein Projekt, das aber keine MySQL Datenbank benutzt, hat an dieser Stelle aber ein Problem, denn die Entwickler müssten ein eigenes Repository entwickeln und dann wieder alle Controller und co. durchgehen und das Repository ersetzen.

Um das zu vermeiden injizieren wir in den Controllern nicht das Repository selbst, sondern das Interface: `public function __construct(PostRepositoryInterface $post)`. Jetzt muss nur noch das Problem gelöst werden, dass Laravel das Interface nicht automatisch auflösen kann. Wir müssen hier also nachhelfen. Wir bauen also einen ServiceProvider (oder können auch den AppServiceProvider nehmen, wenn wir kein Package entwickeln) und definieren, wie das PostRepositoryInterface aufgelöst werden soll:

```php
<?php

/**
 * Register any application services.
 *
 * @return void
 */
public function register()
{
    // ...
    $this->app->bind(WordRepositoryInterface::class, WordRepository::class);
}
```

Jetzt können wir also ganz einfach die Repositories austauschen oder sogar über bestimmte Bedingungen unterschiedliche Repositories benutzen.

## Fazit

Der Einsatz von Repositories mag zwar am Anfang sehr eigenartig und überflüssig erscheinen, kann einem aber nach einer Weile einen Haufen an Arbeit ersparen. Ich habe mir das erste Mal dieses Konzept näher angeschaut, als ich gemerkt habe, dass das User-Repository einer größeren Anwendung ausgetauscht werden muss. Zu dem Zeitpunkt war es zwar schon zu spät, aber seitdem weiß ich wie hilfreich das Repository Pattern sein kann.
