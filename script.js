const loadData = async () => {
    const res = await fetch(
      'https://openapi.programming-hero.com/api/retro-forum/posts'
    );
    const data = await res.json();
    const moreData = data.posts;
    // console.log(allData);
    displayData(moreData);
  };
  
  const displayData = moreData => {
    // console.log(phones);
  
    const dataContainer = document.getElementById('container-data');
    moreData.forEach(data => {
        // console.log(data);
        // 1: create a div
        const cardData = document.createElement('div');
        cardData.classList =
          'bg-gray-200 border-blue-500 h-[12em] rounded-xl my-4 mt-0';
          cardData.innerHTML = `
         <div class="flex pt-6 border- gap-12 ml-2">
                    <div class="indicator">
      <span class="indicator-item badge badge-accent ${
        data.isActive ? 'bg-green-500' : 'bg-red-500'
      } ""></span> 
      <div class="grid  h-2 bg-base-300 place-items-center">
        <img class="border-2 w-28 rounded-xl" src="${data.image}" alt="asset" />
      </div>
    </div>
                    <div>
                      <div class="flex gap-12 text-sm items-center text-center">
                        <h4>#${data.category}</h4>
                        <h4>Author: <span>${data.author.name}</span></h4>
                      </div>
                      <div class="font-bold text-sm pt-4">
                        <h1 onclick="eventHandlerButton()" id="description-button">${
                          data.title
                        }</h1>
                        <p class="mt-3 font-normal">
                          ${data.description}
                        </p>
                        <img class="mt-6 mb-3" src="assets/Line.png" alt="">
                        
                        <div class="flex items-center gap-12">
                          <div class="flex items-center gap-12 ">
                          <div class="divider"></div> 
                             <div class="flex items-center gap-1">
                            <img class="h-6 mt-2" src="images/tabler-icon-message-2.png" alt="message icon">
                              <h6>${data.comment_count}</h6>
                           </div>
                           <div>
                            <div  id="eye-icon" class="flex items-center gap-1 description-button" >
                            <img class="h-6 mt-2" src="images/Group 16.png" alt="eye icon">
                            <h6>${data.view_count}</h6>
                           </div>
                           </div>
                           <div>
                            <div class="flex items-center gap-1">
                            <img class="h-6 mt-2" src="images/Group 18.png" alt="time icon">
                            <h6 class="text-sm">${
                              data.posted_time
                            }<span>min</span></h6>
                           </div>
                           </div>
                          </div>
                         <div class="ml-20">
                           <button onclick="handlerEvenButton()">
                             <img class="" src="images/Group 40106.png" alt="">
                           </button>
                         </div>
                        </div>
                      </div>
                    </div>
                  </div>
        `;
    
        dataContainer.appendChild(cardData);
      });
    };
    
    
    
    // eventHandler button
    
    const handlerEvenButton = () => {
      const buttonDescription = document.getElementById('description-button');
      const getInnerText = buttonDescription.innerText;
      console.log(getInnerText);
      const callFunction = document.getElementById('eye-icon');
      const getCallFunction = callFunction.innerText;
    
      const getButtonSpan = document.getElementById('right-side-span');
      getButtonSpan.classList =
        'items-center bg-white justify-between border-2 rounded-2xl gap-8 pt-6 pb-6 px-20 text-center grid grid-cols-2';
      const div = document.createElement('div');
      const h1 = document.createElement('h1');
      const h2 = document.createElement('h1');
      div.appendChild(h1);
      div.appendChild(h2);
      h1.innerText = getInnerText;
      h2.innerText = getCallFunction;
      getButtonSpan.appendChild(h1);
      getButtonSpan.appendChild(h2);
    };
    
    // handle search button
     
    
    
    
    const loadData2 = async () => {
      const res = await fetch(
        'https://openapi.programming-hero.com/api/retro-forum/latest-posts'
      );
      const data2 = await res.json();
      const phones2 = data2;
      // console.log(phones2);
      displayData2(phones2);
    };
    
    const displayData2 = phones2 => {
      const containerSecond = document.getElementById('second-container');
      phones2.forEach(phone2 => {
        // console.log(phone2);
    
        const cardSecond = document.createElement('div');
        cardSecond.classList = 'flex';
        cardSecond.innerHTML = `
        <div class=" gap-12 mt-8 flex-1">
        <div class="border-2 px-6 h-[36rem] space-y-2 py-3 gap-12 rounded-xl">
                  <img class="border-2 rounded-xl hover:shadow-2xl hover:drop-shadow-2xl " src="${
                    phone2.cover_image
                  }" alt="latest">
                  <p class="flex items-center gap-2"><img class="h-4 w-4" src="images/data.png" alt="time"><span>${
                    phone2.author.posted_date || 'No Publish Date'
                  }</span></p>
                  <h3 class="font-bold">${phone2.description}</h3>
                  <p>${phone2.title}</p>
                  <div class="flex gap-2 items-center ">
                    <img class="border-2 w-20 p-2 rounded-full" src="${
                      phone2.profile_image
                    }" alt="asset" />
                    <span>
                      <h1>${phone2.author.name}</h1>
                      <h6>${phone2.author.designation || 'Unknown'}</h6>
                    </span>
                  </div>
                </div>
             </div>
    
        `;
        containerSecond.appendChild(cardSecond);
      });
    };
    
    loadData2();
    
    loadData(); 
