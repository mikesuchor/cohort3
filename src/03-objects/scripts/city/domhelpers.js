const domhelpers = {
    
    clearInputs: (input1, input2, input3, input4) => {
        input1.value = "";
        input2.value = "";
        input3.value = "";
        input4.value = "";
    },

    createCard(key, name, latitude, longitude, population, target) {
        if(!name) {
            return;
        }
        const cityCardTemplate = document.createElement("div");
            cityCardTemplate.id = name;
            cityCardTemplate.setAttribute("key", key);
            cityCardTemplate.classList.add("city");
        const deleteIcon = document.createElement("i");
            deleteIcon.classList.add("fas", "fa-times");
            cityCardTemplate.appendChild(deleteIcon);
        const globeIcon = document.createElement("i");
            globeIcon.classList.add("fas", "fa-globe-americas", "fa-4x");
            cityCardTemplate.appendChild(globeIcon);
        const cityName = document.createElement("h2");
            cityName.classList.add("city-name");
            cityName.innerText = name;
            cityCardTemplate.appendChild(cityName);
        const cityLatitude = document.createElement("h2");
            cityLatitude.classList.add("city-latitude");
            cityLatitude.innerText = latitude;
            const latitudeIcon = document.createElement("i");
                latitudeIcon.classList.add("fas", "fa-arrows-alt-v");
                cityLatitude.prepend(latitudeIcon);
            cityCardTemplate.appendChild(cityLatitude);
        const cityLongitude = document.createElement("h2");
            cityLongitude.classList.add("city-longitude");
            cityLongitude.innerText = longitude;
            const longitudeIcon = document.createElement("i");
                longitudeIcon.classList.add("fas", "fa-arrows-alt-h");
                cityLongitude.prepend(longitudeIcon);
            cityCardTemplate.appendChild(cityLongitude);
        const lineBreak = document.createElement("br");
            cityCardTemplate.appendChild(lineBreak);
        const populationIcon = document.createElement("i");
            populationIcon.classList.add("fas", "fa-male");
            cityCardTemplate.appendChild(populationIcon);
        const populationOutput = document.createElement("h2");
            populationOutput.id = `population${key}`;
            populationOutput.classList.add("population-output");
            populationOutput.innerText = population;
            cityCardTemplate.appendChild(populationOutput);
        const lineBreak2 = document.createElement("br");
            cityCardTemplate.appendChild(lineBreak2);
        const input = document.createElement("input");
            input.id = `input${key}`;
            input.classList.add("population-input");
            input.type = "number";
            input.min = "0";
            input.placeholder = "People to add / remove";
            cityCardTemplate.appendChild(input);
        const movedInButton = document.createElement("button");
            movedInButton.id = `movedin-button${key}`;
            movedInButton.classList.add("movedin-button", "action-button");
            movedInButton.innerText = " Moved In";
            const movedInIcon = document.createElement("i");
                movedInIcon.classList.add("fas", "fa-sign-in-alt");
                movedInButton.prepend(movedInIcon);
            cityCardTemplate.appendChild(movedInButton);
        const movedOutButton = document.createElement("button");
            movedOutButton.id = `movedout-button${key}`;
            movedOutButton.classList.add("movedout-button", "action-button");
            movedOutButton.innerText = "Moved Out ";
            const movedOutIcon = document.createElement("i");
                movedOutIcon.classList.add("fas", "fa-sign-out-alt");
                movedOutButton.appendChild(movedOutIcon);
            cityCardTemplate.appendChild(movedOutButton);
        target.appendChild(cityCardTemplate);
        return cityCardTemplate;
    },

    removeCard(node) {
        node.remove();
    }
}

export default domhelpers;