# use-country-info

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## How to works

<details>
<br/>
<summary> English-USA </summary>
<br/>

The `useCountryInfo` hook is a React hook that allows you to easily and efficiently fetch detailed information about countries. With this hook, you can access comprehensive data such as demographic, geographic, and cultural information about any country directly in your React application.

## Installation

To use the `useCountryInfo` hook, you need to have React installed in your project. Run the following command to install the hook:

```shell
npm install use-country-info
```

or

```shell
yarn add use-country-info
```

## Usage
Here's a basic example of how to use the useCountryInfo hook in a React component:

```js
import React from 'react';
import { useCountryInfo } from 'use-country-info';

function CountryInfo() {
  const {
    allInfo,
    callingDDIInfo,
    flags
  } = useCountryInfo();

  // Render the country data or use it as needed
  return (
    <div>
      {/* Render the country data or use it as needed */}
    </div>
  );
}

export default CountryInfo;
```

## Objects example

<details>
<br/>
<summary> AllInfo </summary>
<br/>

```js
{
    "name": {
      "common": "Jordan",
      "official": "Hashemite Kingdom of Jordan",
      "nativeName": {
        "ara": {
          "official": "المملكة الأردنية الهاشمية",
          "common": "الأردن"
        }
      }
    },
    "tld": [
      ".jo",
      "الاردن."
    ],
    "cca2": "JO",
    "ccn3": "400",
    "cca3": "JOR",
    "cioc": "JOR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "JOD": {
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }
    },
    "countryCallingCode": {
      "root": "+9",
      "suffixes": [
        "62"
      ]
    },
    "capital": [
      "Amman"
    ],
    "altSpellings": [
      "JO",
      "Hashemite Kingdom of Jordan",
      "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "languages": {
      "ara": "Arabic"
    },
    "latlng": [
      31,
      36
    ],
    "landlocked": false,
    "borders": [
      "IRQ",
      "ISR",
      "PSE",
      "SAU",
      "SYR"
    ],
    "area": 89342,
    "demonyms": {
      "eng": {
        "f": "Jordanian",
        "m": "Jordanian"
      },
      "fra": {
        "f": "Jordanienne",
        "m": "Jordanien"
      }
    },
    "flag": "🇯🇴",
    "maps": {
      "googleMaps": "https://goo.gl/maps/ko1dzSDKg8Gsi9A98",
      "openStreetMaps": "https://www.openstreetmap.org/relation/184818"
    },
    "population": 10203140,
    "gini": {
      "2010": 33.7
    },
    "fifa": "JOR",
    "car": {
      "signs": [
        "HKJ"
      ],
      "side": "right"
    },
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/jo.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/jo.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [
        31.95,
        35.93
      ]
    },
    "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
    }
  },
```
</details>

<details>
<br/>
<summary> CallingDDIInfo </summary>
<br/>

```js
  {
    "countryCallingCode": {
      "root": "+9",
      "suffixes": [
        "62"
      ]
    },
    "flag": "🇲🇵",
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
  }
```
</details>


<details>
<br/>
<summary> Flags </summary>
<br/>

```js
  {
    "flag": "🇲🇵",
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
  }
```
</details>

##

In the above example, we import the useCountryInfoFetcher hook and use it in the CountryInfo component. The hook returns two variables: allInfo and callingCountries, which contain the information for all countries and the specific information for the calling codes of each country, respectively.

You can use these variables to render the country information in your component or use it as needed.

## Contribution
This is an open-source project, and we welcome contributions from the community. If you encounter issues, bugs, or have ideas for improvements, feel free to open an issue or submit a pull request in the official repository on GitHub.

## License
This project is licensed under the MIT License. See the LICENSE file for more information.

</br>
</br>

</details>

## Como usar - Português-BR
O hook useCountryInfoFetcher é um hook React que permite obter informações detalhadas sobre países de forma fácil e eficiente. Com este hook, você pode acessar dados abrangentes, como informações demográficas, geográficas e culturais de qualquer país diretamente no seu aplicativo React.

Instalação
Para utilizar o hook useCountryInfoFetcher, você precisa ter o React instalado em seu projeto. Execute o seguinte comando para instalar o hook:

```shell
npm install use-country-info
```

or

```shell
yarn add use-country-info
```

## Uso
Aqui está um exemplo básico de como utilizar o hook useCountryInfoFetcher em um componente React:

```js
import React from 'react';
import { useCountryInfo } from 'use-country-info';

function CountryInfo() {
  const {
    allInfo,
    callingDDIInfo,
    flags
  } = useCountryInfo();

  // Renderize os dados do país ou utilize-os conforme necessário
  return (
    <div>
      {/* Renderize os dados do país ou utilize-os conforme necessário */}
    </div>
  );
}

export default CountryInfo;
```

## Objetos de exemplo

<details>
<br/>
<summary> AllInfo </summary>
<br/>

```js
{
    "name": {
      "common": "Jordan",
      "official": "Hashemite Kingdom of Jordan",
      "nativeName": {
        "ara": {
          "official": "المملكة الأردنية الهاشمية",
          "common": "الأردن"
        }
      }
    },
    "tld": [
      ".jo",
      "الاردن."
    ],
    "cca2": "JO",
    "ccn3": "400",
    "cca3": "JOR",
    "cioc": "JOR",
    "independent": true,
    "status": "officially-assigned",
    "unMember": true,
    "currencies": {
      "JOD": {
        "name": "Jordanian dinar",
        "symbol": "د.ا"
      }
    },
    "countryCallingCode": {
      "root": "+9",
      "suffixes": [
        "62"
      ]
    },
    "capital": [
      "Amman"
    ],
    "altSpellings": [
      "JO",
      "Hashemite Kingdom of Jordan",
      "al-Mamlakah al-Urdunīyah al-Hāshimīyah"
    ],
    "region": "Asia",
    "subregion": "Western Asia",
    "languages": {
      "ara": "Arabic"
    },
    "latlng": [
      31,
      36
    ],
    "landlocked": false,
    "borders": [
      "IRQ",
      "ISR",
      "PSE",
      "SAU",
      "SYR"
    ],
    "area": 89342,
    "demonyms": {
      "eng": {
        "f": "Jordanian",
        "m": "Jordanian"
      },
      "fra": {
        "f": "Jordanienne",
        "m": "Jordanien"
      }
    },
    "flag": "🇯🇴",
    "maps": {
      "googleMaps": "https://goo.gl/maps/ko1dzSDKg8Gsi9A98",
      "openStreetMaps": "https://www.openstreetmap.org/relation/184818"
    },
    "population": 10203140,
    "gini": {
      "2010": 33.7
    },
    "fifa": "JOR",
    "car": {
      "signs": [
        "HKJ"
      ],
      "side": "right"
    },
    "timezones": [
      "UTC+03:00"
    ],
    "continents": [
      "Asia"
    ],
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
    "coatOfArms": {
      "png": "https://mainfacts.com/media/images/coats_of_arms/jo.png",
      "svg": "https://mainfacts.com/media/images/coats_of_arms/jo.svg"
    },
    "startOfWeek": "sunday",
    "capitalInfo": {
      "latlng": [
        31.95,
        35.93
      ]
    },
    "postalCode": {
      "format": "#####",
      "regex": "^(\\d{5})$"
    }
  },
```
</details>

<details>
<br/>
<summary> CallingDDIInfo </summary>
<br/>

```js
  {
    "countryCallingCode": {
      "root": "+9",
      "suffixes": [
        "62"
      ]
    },
    "flag": "🇲🇵",
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
  }
```
</details>


<details>
<br/>
<summary> Flags </summary>
<br/>

```js
  {
    "flag": "🇲🇵",
    "flags": {
      "png": "https://flagcdn.com/w320/jo.png",
      "svg": "https://flagcdn.com/jo.svg",
      "alt": "The flag of Jordan is composed of three equal horizontal bands of black, white and green, with a red isosceles triangle superimposed on the hoist side of the field. This triangle has its base on the hoist end, spans about half the width of the field and bears a small seven-pointed white star at its center."
    },
  }
```
</details>

##


No exemplo acima, importamos o hook useCountryInfoFetcher e o utilizamos no componente CountryInfo. O hook retorna duas variáveis: allInfo e callingCountries, que contêm as informações de todos os países e as informações específicas para os códigos de chamada de cada país, respectivamente.

Você pode utilizar essas variáveis para renderizar as informações dos países no seu componente ou utilizá-las conforme necessário.

## Contribuição
Este é um projeto de código aberto, e encorajamos contribuições da comunidade. Se você encontrar problemas, bugs ou tiver ideias para melhorias, fique à vontade para abrir uma issue ou enviar um pull request no repositório oficial do projeto no GitHub.

## Licença
Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.

```js
  Este é apenas um exemplo mais elaborado de README.md para o hook `useCountryInfo`. Certifique-se de personalizar e atualizar o conteúdo do arquivo conforme necessário, adicionando seções adicionais relevantes, como exemplos de uso mais avançados, configuração e requisitos de ambiente.
```
