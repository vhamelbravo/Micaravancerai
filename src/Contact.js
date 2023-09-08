import envelope from './assets/envelope.png'
function Contact() {
return (
	<>
	<div id="contacto" className="bg-orange-100 flex">
    <div className="w-2/3">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contacto</h2>
        <form action="https://formsubmit.co/115da6b77442ce173004923dad844dd4" method="POST" className="space-y-8">
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">Su e-mail</label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium">Asunto</label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">Su Mensaje</label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center rounded-lg text-white bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4"
          >
            Mandar mensaje
          </button>
        </form>
      </div>
    </div>
    <div className="w-1/3">
      <div className="justify-end py-28 mr-12">
        <iframe
          width="100%"
          height={400}
          frameBorder={0}
          scrolling="no"
          marginHeight={0}
          marginWidth={0}
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Camino%20el%20Alba%208680,%20depto.%20201+(MICARAVANCERAI)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          &lt;a href="https://www.maps.ie/population/"&gt;Find Population on Map&lt;7a&gt;
        </iframe>
      </div>
     <div className="flex items-end translate-y-[-100%] -mx-12 max-sm:scale-[60%] max-sm:-mx-[360%] max-[780px]:-mx-[180%] max-lg:-mx-[150%] max-xl:-mx-[100%] max-[1450px]:-mx-[60%]  space-x-4 ">
        <div className="btn join-item">
		<i className="fi fi-brands-whatsapp"> </i>
		<p> <a href="https://wa.me/56997843280"> +56 9 9748 3280 </a> </p>
		</div>
        <div className="btn join-item">
		<i className="fi fi-brands-instagram"> </i>
		<p> <a href="https://instagram.com/micaravancerai"> @micaravancerai </a> </p>
		</div>
        <div className="btn join-item">
		<p> <a href="mailto:m.a.chamorro.o@gmail.com"> m.a.chamorro.o@gmail.com </a> </p>

		</div>
      </div>
    </div>
  </div>
</>


)
}
export default Contact
