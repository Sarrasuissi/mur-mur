function CardContactWithMap(props:{
  data:{
    name?: string;
    adresse?: string;
    phone?: string;
    mail?: string;
    description?: string;
  }
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 shadow-2xl  bg-white md:mb-0 mb-32">
      <div className="bg-white m-auto font-bold relative p-4">
      
        <span className="text-orange text-2xl">{props.data.name}</span>
        <ul className="space-y-6 mt-6">
          <li className="flex items-center gap-3 font-bold text-lg">
            <img
              alt="email"
              title="Email"
              className="w-6"
              src="/assets/icons/localisation.webp"
            />
             <span>{props.data.adresse}</span>
           
          </li>
          <li className="flex items-center gap-3 font-bold text-lg">
            <img
              alt="email"
              title="Email"
              className="w-6"
              src="/assets/icons/phone.webp"
            />
              <span>{props.data.phone}</span>
           
          </li>
          <li className="flex items-center gap-3 font-bold text-lg">
            <img
              alt="email"
              title="Email"
              className="w-6"
              src="/assets/icons/mail.webp"
            />
            <span>{props.data.mail}</span>
          </li>
          <li className="flex items-center gap-3 font-bold text-lg">
            <img
              alt="horaire"
              title="Horaire"
              className="w-6"
              src="/assets/icons/clock.webp"
            />
            <span>Lundi au Vendredi 09h00-12h30 et 14h00 À 17h30</span>
          </li>
        </ul>
      </div>

      <div className="bg-orange mt-[800px] md:mt-[400px]  p-6 md:p-10 mx-4 md:mx-28 absolute text-white shadow-2xl ">
        <strong className="text-2xl">Contactez-nous</strong>
       
        <p className="text-[16px] py-4 max-w-[500px]">
         {props.data.description}
        </p>
        <a href="/contactez-mur-mur">
          <button className="border-2 p-2 px-8 text-xl">Contactez</button>
        </a>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d2624.915017232097!2d2.3439438768465695!3d48.85983090060469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47e66e1f16e9b61b%3A0x5d8c9ce77c820b96!2sRue%20des%20Halles%2C%2075001%20Paris%2C%20France!3m2!1d48.8595699!2d2.3468647!5e0!3m2!1sfr!2stn!4v1738675699688!5m2!1sfr!2stn"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Maps Location - Rue des Halles, Paris"
      ></iframe>
    </div>
  );
}

export default CardContactWithMap;
