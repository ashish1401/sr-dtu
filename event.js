const events = [
  {
    eventName: "Quidditch: The Drone Race ",
    "prizeMoney": "10,000Rs ",
    eventDate: "22nd April,2022",
    imageUrl: "Quidditch.jpeg",
    RegLink: "#"
  },
  {
    eventName: "Robo-Soccer ",
    prizeMoney: "10,000Rs ",
    eventDate: "22nd April,2022",
    imageUrl: "Roborace.jpeg",
    RegLink: "#"
  },
  {
    eventName: "Robo-Soccer ",
    prizeMoney: "10,000Rs ",
    eventDate: "22nd April,2022",
    imageUrl: "Roborace.jpeg",
    RegLink: "#"
  }


]
document.addEventListener("DOMContentLoaded", function () {
  let wrapper = document.getElementById("events-parent");
  let output = "";
  for (let i = 0; i < events.length; i++) {
    output += `
    
    <div class="w-full shadow-2xl md:shadow-2xl   rounded-xl border-[var(--white)] border-opacity-10  mb-4 bg-[var(--black)]">
    <div class=" overflow-hidden rounded-lg mx-10">
      <img
        src="./images/events/${events[i].imageUrl}"
        alt="image"
        class="w-full mt-12 rounded-xl shadow-xl backdrop-blur-xl"
      />
      <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3
            class="text-dark hover:text-primary  mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
          ${events[i].eventName}
          
        </h3>
        <h3
            class="text-dark text-[var(--blue)] w-full bg-[var(--white)] bg-opacity-10 hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
          ${events[i].eventDate}
          
        </h3>
       
        <a
          href="${events[i].RegLink}"
          class="text-body-color hover:bg-[var(--blue)]  inline-block rounded-full border border-[var(--white)] py-2 px-7 text-base font-medium transition hover:text-white"
        >
        Register Now
        </a>
      </div>
    </div>
  </div>
  `
  }
  wrapper.innerHTML = output;
})


