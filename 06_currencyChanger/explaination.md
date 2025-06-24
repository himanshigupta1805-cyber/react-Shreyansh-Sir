# Designing Custom Hooks

We use two hooks useState and useEffect

Mostly hooks take default arguements like kuch bhi pass kr skte hain useState() mein but our hook took a fixed arguement - "Currency"

Now if we want to fetch API we can directly do that but we used useEffect bcoz we want jab koi load krega ya koi use krega tab he api fetch ho.

Now after fetch we convert it into json object then we need to store the data.For that purpose we use useState hook that is to store the data using setData

# Making Component - To increase Reusability

InputBox is creatd to avoid writing same code for to and from section again and again we just pass props to inputbox tag in app jsx file.

We use basic React and JSX here.
firstly passed all the parameters to the function as object destructuring {tailwind props wala project type}

then we created a div for entire component and divided them into two flexed divs
each div had a label and left side had amount and right side had currency options.
Used TailwindCss to design them and used React and JS to pass variables into them.

Finally to export we can directly export from that file or create new index,js file which will accept all the imported component and export them once and final.

# Working Functionality 
We imported data fetched by API and stored it in a variable.
for options we used data ka key values which will appear in dropdown.

Also created a swap function.
Created a convert function which will trigger on submit.

We imported InputBox from the components file and used to create two divs of FROM and TO .
This way we reused that component and just altered the props.

