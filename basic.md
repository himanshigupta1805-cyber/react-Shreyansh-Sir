## WHY react?
makes easier to manage and build complex frontend jaha ek button click krne pr 2-3 simultaneous task ho rhe ho etc

JS states(mostly varaiable) and UI manipulation usinf DOM were not synced and to solve this consistency React was introduced.

React is Library and not framework.

Framework is like military like ye naam h file ka toh yhi rhega independence is very less.
Library is like cool dude which gives more freedom to do tasks.


## Disadvantages

React is not a complete solution in most cases browser rendering issues of JS no routing no seo


Agr website banani h toh react dom use krenge
and if app banana h toh react native use krenge


# Project Creation
project banane ek toh basic method h create react use krke it takes long time so we use modern method using vite

## Using Vite
terminal pr 
npm create vite@latest
give project name
select a framework
select a variant and done

BUT if wee see in our folder mode modules file is missing
for that terminal pr go to that folder like 
cd 01vitereacrt
us ls command to look out if u have node modules or it is missing
if missing use
npm install cmd on terminal.

How to run this project??
use cmd
npm run "scripts" (scripts from json file)

## Using react
use cmmnd 
npx creat-react-app "project name"
navigate to project file 
cd 01basicreact

imp->package.json agr dikh rha h mtln succesful hai and we can run or scripts

to run use same cmmnd npm run "scripts"

## Virtual Dom
createRoot behind the scene ek virtual DOM create krta h jo ki og JS wale DOM ka copy hota h.
Agr virtual DOM nahi rehta toh UI pr changes krne ke lie poora main DOM reset krna padta due to which page ko baar baar reload krna pdta so for that reason we create vritual dom and fir main dom pe whi changes krte hain jo virtual dom pr ho.

# React Fibre
The goal of React Fiber is to increase its suitability for areas like animation, layout, and gestures. Its headline feature is incremental rendering: the ability to split rendering work into chunks and spread it out over multiple frames.

Other key features include the ability to pause, abort, or reuse work as new updates come in; the ability to assign priority to different types of updates; and new concurrency primitives.This is called Hydration Concept.



## Reconciliation
It is recursive algorithm which reconsider which one to update.

The algorithm React uses to diff one tree with another to determine which parts need to be changed.
2 Trees one from browser (main dom) and other obne using createRoot (virtual dom).

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM."A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory (the tree being talked about here is the object made inside jsx). This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.



Update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.


## Fiber
We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

pause work and come back to it later.
assign priority to different types of work.
reuse previously completed work.
abort work if it's no longer needed.

When dealing with UIs, the problem is that if too much work is executed all at once, it can cause animations to drop frames and look choppy. What's more, some of that work may be unnecessary if it's superseded by a more recent update. This is where the comparison between UI components and function breaks down, because components have more specific concerns than functions in general.

Newer browsers (and React Native) implement APIs that help address this exact problem: requestIdleCallback schedules a low priority function to be called during an idle period, and requestAnimationFrame schedules a high priority function to be called on the next animation frame. The problem is that, in order to use those APIs, you need a way to break rendering work into incremental units. If you rely only on the call stack, it will keep doing work until the stack is empty.

Wouldn't it be great if we could customize the behavior of the call stack to optimize for rendering UIs? Wouldn't it be great if we could interrupt the call stack at will and manipulate stack frames manually?

That's the purpose of React Fiber. Fiber is reimplementation of the stack, specialized for React components. You can think of a single fiber as a virtual stack frame.

The advantage of reimplementing the stack is that you can keep stack frames in memory and execute them however (and whenever) you want. This is crucial for accomplishing the goals we have for scheduling.

Aside from scheduling, manually dealing with stack frames unlocks the potential for features such as concurrency and error boundaries. We will cover these topics in future sections.
