import React from "react";

const Blogthree = () => {
  return (
    <div className="w-full">
      <div className="mb-3">
        <a
          href="/"
          aria-label="Article"
          className="inline-block text-black transition-colors "
        >
          <p className="font-sans text-xl  leading-none tracking-tight mb-14 lg:text-4xl">
            What is the difference between javascript and NodeJS?
          </p>
        </a>
      </div>
      <p className="mb-4 text-base text-gray-700 md:text-lg">
        JavaScript is a high-level programming language that makes our web pages
        and web applications dynamic and interactive by giving them the ability
        to think and act. JavaScript is a lightweight (easy to learn syntax) and
        object-oriented programming language whereas Node.js is a runtime
        environment built on google v8 engine and typically used to represent a
        list of objects and functions that JavaScript programs can access. In
        this post, we will walk you through what JavaScript and Node.js are, and
        then we will demonstrate the differences between JavaScript and Node.js.
        <br />
        What is JavaScript?
        <br />
        JavaScript’s first version was launched in 1995 and it was developed by
        Brendan Eich of Netscape (then called LiveScript). As discussed earlier,
        JavaScript is a high-level programming language that has all the
        functionalities normally a programming language has. JavaScript is an
        Object-oriented programming language that can be used on the client-side
        as well as on the server-side and developers not only use it for
        creating web pages but also it is used for game development and mobile
        app development.
        <br />
        What is Node.js?
        <br />
        Node.js was first introduced in 2009 developed by Ryan Dahl and is a
        runtime environment for JavaScript built on Google’s v8 engine whose
        main purpose is to run JavaScript on the server and hence JavaScript can
        be executed outside of the browser. The nicest part about Node.js is
        that it never blocks I/O, is event-driven, and can be used to create
        highly scalable apps. In Node.js everything is a module and using these
        modules developers make use of Node.js in creating web APIs, Rest API
        servers, command-line applications, and real-time chat applications.
        <br />
        Difference between JavaScript and Node.js
        <br />
        JavaScript is a proper high-level programming language used to create
        web scripts whereas Node.js is a run time environment built on google’s
        v8 engine. JavaScript is executed in the browser whereas using Node.js
        gives us the ability to execute JavaScript outside the browser.
        JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t
        have the capability to add HTML. JavaScript is mainly used to create
        front end web applications or develop client-side whereas Node.js is
        used on the back end development that is server-side development
        JavaScript follows the standard of JavaScript when writing programs
        whereas Node.js is written in C++ while using the v8 engine, it runs
        JavaScript outside the browser.
        <br />
      </p>
    </div>
  );
};

export default Blogthree;
