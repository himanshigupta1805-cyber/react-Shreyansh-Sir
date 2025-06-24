function customRender(reactElement , container){
    /*const domElement = document.createElement(reactElement.type)
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    domElement.innerHTML = reactElement.children

    container.appendChild(domElement)
    */

    //Version 2 more optimized
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    //object type h toh for in lagayenge heheh
    for (const prop in reactElement.props){
        if(prop === 'children') continue
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}


const reactElement = {
    type : 'a',
    props : {
        href : "https://google.com",
        target : '_blank'
    },
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector("#root");

customRender(reactElement , mainContainer)


//WHAT WE DID??

//WE FIRST OF ALL CREATED OUR OWN REACT OBEJCT AND DEFINED ITS TYPE AND PROPERTIES

// THEN WE SELECTED IN WHICH CONTAINER DO WE HAVE TO APPEND THE CHANGED OR ELEMENT WE GONNA MAKE USING DOM

//THEN DEFINE A FUNCTION THAT ACCEPTS REACT OBJECT AND CONTAINER IN WHICH THAT ELEMENT IS TO BE ADDED 

// GIVE DEFINITION TO THE FUNCTION USING DOM

//BUT AB DIKKAT YE H KI HUM SETAttribute BAAR BAAR KRRHE H TOH AGR KAAFI SAARE PROPS H TOH SABKO AISE NHI KR SKTE TOH WE MAKE IT LOOP BASED

//ab jaise main.jsx mei humne dekha tha wha hum html form mei return krwa rhe the toh React us jsx ko same object type mei parsing krta h fir read krta hai. 
//Toh ye parsing us html ko tree mei convert krti h

//Now if I say ki html returned from function ko .render mei pass krte h fir wo parsing hoti h and react smjhta h usko toh what if i direct pass this React obejct

//It will not run there in main.jsx because wo expect krta h ki usne jo react object banaya h usi format mei key values assign kro aur wo hume nahi pata toh islie wo usko read he nahi kr paata

//Toh there is a fixed way usinf React.createElement jisse hum aise tree wise pass kr skte h for that refer main.jsx