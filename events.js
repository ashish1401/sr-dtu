let http = new XMLHttpRequest();
http.open('get', 'events.json', true);
http.send();
http.onload = function () {
    if (this.readyState == 4 && this.status == 200) {
        let card = JSON.parse(this.responseText);
        let output = "";
        for (let i in card) {
            output += `
    <div class="w-full px-4 md:w-1/2 xl:w-1/3">
    <div class="mb-10 overflow-hidden rounded-lg">
      <img
        src="./images/events/${i.imageUrl}"
        alt="image"
        class="w-full"
      />
      <div class="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <h3>
          <a
            href="javascript:void(0)"
            class="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
          >
          ${i.eventName}
          </a>
        </h3>
        <p class="text-body-color mb-7 text-base leading-relaxed">
          Lorem ipsum dolor sit amet pretium consectetur adipiscing elit.
          Lorem consectetur adipiscing elit.
        </p>
        <a
          href="javascript:void(0)"
          class="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
        >
        ${i.eventDate}
        </a>
      </div>
    </div>
  </div>`
        }
        document.getElementsByClassName("events-parent").innerHTML = output;

    }

}





