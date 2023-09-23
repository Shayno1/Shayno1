document.addEventListener('DOMContentLoaded', function() {
    let choices = document.querySelectorAll('.choice');
    let answers = {};

    choices.forEach(function(choice) {
        choice.addEventListener('click', function(event) {
            let question = this.parentElement.querySelector('h2').textContent;
            let answer = this.getAttribute('data-value');
            answers[question] = answer;

            // Change background color to dark red when clicked
            this.style.backgroundColor = '#8b0000';
            this.style.color = '#fff';
        });
    });

    document.querySelector('#submit').addEventListener('click', function() {
        suggestSkins(answers);

        // Reset button colors after submit
        choices.forEach(function(choice) {
            choice.style.backgroundColor = '';
            choice.style.color = '';
        });
    });
});

function suggestSkins(answers) {
    let skins = [
        {
            name: "Imperium Vandal",
            price: 2175,
            color: "green",
            imageURL: "imperium_vandal.jpg"
        },
        {
            name: "Champion 2023 Vandal",
            price: 2675,
            color: "gold",
            imageURL: "champion_2023_vandal.jpg"
        },
        {
            name: "No Limits Vandal",
            price: 1275,
            color: "red",
            imageURL: "no_limits_vandal.jpg"
        },
        {
            name: "Megapunk Vandal",
            price: 1775,
            color: "brown",
            imageURL: "megapunk_vandal.jpg"
        },
        {
            name: "Black Market Vandal",
            price: 1775,
            color: "brown",
            imageURL: "black_market_vandal.jpg"
        },
        {
            name: "Altitude Vandal",
            price: 1275,
            color: "blue",
            imageURL: "altitude_vandal.jpg"
        },
        {
            name: "Oni Vandal",
            price: 1775,
            color: "red",
            imageURL: "oni_vandal.jpg"
        },
        {
            name: "Luna Vandal",
            price: 1275,
            color: "blue",
            imageURL: "luna_vandal.jpg"
        },
        {
            name: "Araxys Vandal",
            price: 2175,
            color: "silver",
            imageURL: "araxys_vandal.jpg"
        },
        {
            name: "Crimsonbeast Vandal",
            price: 1775,
            color: "red",
            imageURL: "crimsonbeast_vandal.jpg"
        },
        {
            name: "Chronovoid Vandal",
            price: 2175,
            color: "brown",
            imageURL: "chronovoid_vandal.jpg"
        },
        {
            name: "Ion Vandal",
            price: 1775,
            color: "white",
            imageURL: "ion_vandal.jpg"
        },
        {
            name: "Sarmad Vandal",
            price: 1275,
            color: "green",
            imageURL: "sarmad_vandal.jpg"
        },
        {
            name: "Prelude To Chaos Vandal",
            price: 2175,
            color: "black",
            imageURL: "preludetochaos.jpg"
        },
        {
            name: "Neptune Vandal",
            price: 1775,
            color: "white",
            imageURL: "neptune_vandal.jpg"
        },
        {
            name: "Team Ace Vandal",
            price: 1275,
            color: "purple",
            imageURL: "team_ace_vandal.jpg"
        },
        {
            name: "Gaia's Vengeance Vandal",
            price: 1775,
            color: "white",
            imageURL: "gaias_vengeance_vandal.jpg"
        },
        {
            name: "Endeavour Vandal",
            price: 875,
            color: "white",
            imageURL: "endeavour_vandal.jpg"
        },
        {
            name: "Aristocarat Vandal",
            price: 1275,
            color: "gold",
            imageURL: "aristocarat_vandal.jpg"
        },
        {
            name: "Avalanche Vandal",
            price: 1275,
            color: "blue",
            imageURL: "avalanche_vandal.jpg"
        },
        {
            name: "Ego Vandal",
            price: 1775,
            color: "white",
            imageURL: "ego_vandal.jpg"
        },
        {
            name: "Elderflame Vandal",
            price: 2475,
            color: "red",
            imageURL: "Elderflame.jpg"
        },
        {
            name: "Forsaken Vandal",
            price: 1775,
            color: "green",
            imageURL: "forsaken_vandal.jpg"
        },
        {
            name: "Glitchpop Vandal",
            price: 2175,
            color: "purple",
            imageURL: "Glitchpop.jpg"
        },
        {
            name: "Horizon Vandal",
            price: 1275,
            color: "pink",
            imageURL: "horizon_vandal.jpg"
        },
        {
            name: "Luxe Vandal",
            price: 875,
            color: "blue",
            imageURL: "luxe_vandal.jpg"
        },
        {
            name: "Origin Vandal",
            price: 1775,
            color: "black",
            imageURL: "origin_vandal.jpg"
        },
        {
            name: "Prime Vandal",
            price: 1775,
            color: "gold",
            imageURL: "PrimeVandal.jpg"
        },
        {
            name: "Prism II Vandal",
            price: 875,
            color: "pink",
            imageURL: "prism_ii_vandal.jpg"
        },
        {
            name: "Reaver Vandal",
            price: 1775,
            color: "red",
            imageURL: "reaver_vandal.jpg"
        },
        {
            name: "RGX 11z Pro Vandal",
            price: 2175,
            color: "red",
            imageURL: "rgx_11z_pro_vandal.jpg"
        },
        {
            name: "Sakura Vandal",
            price: 1275,
            color: "white",
            imageURL: "sakura_vandal.jpg"
        },
        {
            name: "Sensation Vandal",
            price: 875,
            color: "pink",
            imageURL: "sensation_vandal.jpg"
        },
        {
            name: "Sentinels of Light Vandal",
            price: 2175,
            color: "black",
            imageURL: "sentinels_of_light.jpg"
        },
        {
            name: "Silvanus Vandal",
            price: 1275,
            color: "blue",
            imageURL: "silvanus_vandal.jpg"
        },
        {
            name: "Tethered Realms Vandal",
            price: 1775,
            color: "white",
            imageURL: "tethered_realms_vandal.jpg"
        },
        {
            name: "Valorant Go Vol.2 Vandal",
            price: 1775,
            color: "white",
            imageURL: "valorant_go_vol2_vandal.jpg"
        },
        {
            name: "Wasteland Vandal",
            price: 1275,
            color: "brown",
            imageURL: "wasteland_vandal.jpg"
        },
        {
            name: "Winterwunderland Vandal",
            price: 1275,
            color: "green",
            imageURL: "winterwunderland_vandal.jpg"
        }
    ];

    let filteredSkins = skins.filter(function(skin) {
        return (
            (answers['Color Preference'] === undefined || skin.color === answers['Color Preference']) &&
            (answers['Price Range'] === undefined || skin.price <= parseInt(answers['Price Range']))
        );
    });

    if (filteredSkins.length > 0) {
        displaySuggestedSkins(filteredSkins);
    } else {
        displaySuggestedSkins([{ name: "No matching skin found", imageURL: "" }]);
    }
}

function displaySuggestedSkins(skins) {
    let suggestedSkinContainer = document.querySelector('.suggested-skins');
    suggestedSkinContainer.innerHTML = '';

    skins.forEach(function(skin) {
        let skinElement = document.createElement('div');
        skinElement.classList.add('skin');

        let skinName = document.createElement('h2');
        skinName.textContent = skin.name;

        let skinImage = document.createElement('img');
        skinImage.src = skin.imageURL;
        skinImage.alt = 'Suggested Skin';

        skinElement.appendChild(skinName);
        skinElement.appendChild(skinImage);
        suggestedSkinContainer.appendChild(skinElement);
    });
}

