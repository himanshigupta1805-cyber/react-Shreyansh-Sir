import React from 'react'

function Card(props){
    console.log("props", props)  /* gives empty object rn*/ 
    return (
        <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] mb-4">
        <div>
          <img
            src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
            alt="test"
            width="300"
            height="300"
            className="object-cover object-center rounded-t-xl"
            
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-10">
          <div className="flex justify-between">
            <h3 className="font-bold justify-left ">{props.channel}</h3>
            <h4>Price</h4>
          </div>
          <div className="flex  justify-between">
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    )
}

export default Card

//Every function has its own props which is nothing but empty object
//to add values to this object got to app.jsx

//Mostly props object h toh uski destructuring krdete h and then use krlete h taaki baar baar props. use na krna pde