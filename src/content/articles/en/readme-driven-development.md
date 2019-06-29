---
id: 201811111
title: "The power of Readme Driven Development"
date: 2018-11-11T16:55:22+02:00
author: Rathes Sachchithananthan
template: post
description: Readme Driven Development (RDD) is a powerful approach in software development to write libraries that people can use and want to use
image: ../../images/blog/readme-driven-development.jpg
categories:
  - Web
tags:
  - documentation
  - concepts
locale: en_US
---

A good piece of software has to follow one important rule: It has to solve the right problem and it has to solve the problem right. This rule works for big enterprise applications as well as for small libraries that serve as part of a bigger ecosystem.

What it actually means is that as a software developer you have to create software that actually solves the problem that was identified and that the software has to be created in a way that others can actually use it. It does not make any sense to create the perfect, bug-free piece of software if nobody needs it. And at the same time it does not make any sense to create software that people just can't use because it is terribly (or even worse not at all) documented.

## Introducing RDD

There is a simple pattern to solve the latter problem of creating something that nobody can't use. It is that simple that it can be described in one sentence, but at the same time there are a few misconceptions that it needs a whole article to clarify things:

**Write the Readme first.**

Read it again. Write the Readme first. With first, it means before anything. It means before you the first line of code, it means before the first test and it even means before you setup the project.

And read it again. It says Readme. It does not say documentation, it does not say manual and it does not say specifications. Just Readme.

**Write the Readme first.**

That's all. This rule will help you to avoid that pieces of software become useless once it is finished.

## Implementing Readme Driven Development

But what does it exactly mean to write the Readme first? It is pretty straight forward. Just before you start working, take the time and start writing a simple file that explains what it is all about.

Start with a title and a subtitle that make it directly clear what the topic is. Then continue with a small paragraph explaining what the code you write intends to do and what it is going to solve.

Then follow with some _Getting Started_ information, so that the user of this piece of software will be able to set things up and configure them if needed.

Next explain the usage of what you are writing. Describe the most important parts of the public interface of your software and how to use them.

Now do this every single time whenever the code needs some changes. Update the Readme to the state your code will be after applying those changes before you actually change the code.

## The power of Readme Driven Development

You might wonder why one should spend that much time upfront on a Readme. Once you start on a project, you will always have some loose coupled ideas on how you want to design the software. You have some experience about software design patterns and you have already solved some similar problems and so you basically know what you want to do.

The problem about start coding immediately is that you will miss the bigger picture. You won't notice that one feature might interfere with another until you start implementing the second one, so you end up re-factoring everything and maybe even have to reconsider the whole design of the software.

To make other people use your software, you have to make sure that people understand and accept the thoughts you initially have when you start. You have to make sure that you are actually understanding tbeir needs, why they actually consider using your software. By writing down the Readme, you can easily discuss ideas without spending too much time on working in the wrong direction.

But it can also be helpful for yourself to verify if the idea you had actually makes sense. Writing the Readme and then re-reading it the day after is the best verification to see if you are doing exactly what you wanted to do. And if not, you haven't spent too much time to start over, right?

Once you start writing code the Readme will help you writing the tests. You already now what you want and therefore you have a path to go in order to complete the project. And you will always know how far you've gone and how much work is still left.

Some small side effect. Once you have finished writing the code, you also have a Readme ready, so you don't have the hassle in the end anymore.

## We do not need waterfall

Readme Driven Development is fine if you do it right, but don't overdo it. This concept is not meant to be applied to large business applications. That would result in the comeback of the waterfall model that nobody wants to see anymore.

RDD is meant to be used in package development when the scope is clear and limited. Another use case would be small services in you microservice ecosystem that have the purpose to be consumed by multiple other services of your system. SDKs for public APIs are also a good example when RDD can help.

### RDD !== DDD

What really needs to be stressed again is the fact, that Readme Driven Development is not Documentation Driven Development. You do not have to write out the whole specification and every internal method in your package. One file, the Readme file, is the only thing you need.

At the same time, this doesn't hold you back from providing more information once the package is finished. The Readme has not to be the only piece of documentation, you should just start with it. It does not have to be perfect either, just make sure that it helps you write better software.

---

Photo by [Steve Johnson](https://unsplash.com/@steve_j) on [Unsplash](https://unsplash.com/photos/htqCupyYlCQ)
