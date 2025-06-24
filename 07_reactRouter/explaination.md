## Pehle components banaenge.
1.Header :

In this we see two new things {Link, NavLink}
toh jaise hum jab react use krte h usme hume useState hooks etc milte hain waise he in Header we get some new things.
which we imported from react-router-dom

Link -> Used in place of 'a' tag because when we use a tag entire page is reloaded but react mei reloading nahi hoti toh we use <link/> tag in place of a tag in React.

NavLink -> Provides extra features in addition to Link. Iske andr hum classes as a callback function pass krte hain. Kyuki in callback we have access to a variable called isActive. This new variable is already defined and we can inject this as ${isActive ? "" : "" }


Just like in atag we use href in Link we use to="/"  

2.Footer :

Kuch khaas nahi h bas CSS hai


>Note : 
we want that every page mein header and footer fix rhe bas Home about us etc keeps changing. Now one way is to call it every time like
<Header />
<page />
<Footer />

>Other way is to do this thing dynamically.
>For this, create a separate Layout.jsx file and in that import Header and footer files and also one interesting thing {Outlet} from react-router-dom. This {Outlet} can be placed between Header and Footer. So, Upr neeche ka same rhega but Outlet dynamically change krta rhega. 
>This Outlet cannot be used randomly There is a syntax for using it. We will have to tell rhe main.jsx file that we are using layout 

# RouterProvider

It takes router as props

## Building Router

Using createBrowserRouter() mathod imported from react-router-dom.

This method accepts array jiske andr list daaldete hain jo humare objects hain.
Is object we give a parent path for example home here jiske andr about us rhega and contact us rhega.
anOther prop is element which is Layout that we created. Now these two are basic needed . Iske aage age aur dena h toh we can use children which takes an array.
Is array mei firse objects bana skte h which is basically nesting.


Another way is using CreateRouteElement method and then using Route tag.(preffered way)

Then we alsp learn how to display dynamic data using usePrams HOOK and look for the syntax carefully as whatever id we pass in path same must be imported and used in element file.

Next Important thing is Api fetch for github page for that we can again use tweo ways.
one way is using use effect but it is not very optimized as data is fetched after you load that page.
instead use a new feature called loader of react router 
(Read documentation)

This features helps loading api when we are hovering over the github on another page.

