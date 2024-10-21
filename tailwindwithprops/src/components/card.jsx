import React from 'react'

function card(props) {
  return (
            <figure class="h-44 md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img class="w-40 h-24 md:w-72 md:h-auto md:rounded-none rounded-full mx-auto" src={props.src} alt="" width="384" height="512"/>
        <div class=" pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
            <p class="text-lg font-medium text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum reprehenderit quibusdam sequi architecto tempora.
            </p>
            </blockquote>
            <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
                {props.name}
            </div>
            <div class="text-red-500 dark:text-slate-500">
                {props.roll}
            </div>
            </figcaption>
        </div>
        </figure>
  )
}

export default card
