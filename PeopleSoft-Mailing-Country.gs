function MailingCity()
{
  var abbreviatedCountries = ['ABW',
'AFG',
'AGO',
'AIA',
'ALA',
'ALB',
'AND',
'ANT',
'ARE',
'ARG',
'ARM',
'ASM',
'ATA',
'ATF',
'ATG',
'AUS',
'AUT',
'AZE',
'AZO',
'BDI',
'BEL',
'BEN',
'BES',
'BFA',
'BGD',
'BGR',
'BHR',
'BHS',
'BIH',
'BLM',
'BLR',
'BLZ',
'BMU',
'BOL',
'BRA',
'BRB',
'BRI',
'BRN',
'BTN',
'BVT',
'BWA',
'CAF',
'CAN',
'CCK',
'CEU',
'CHA',
'CHE',
'CHL',
'CHN',
'CIV',
'CMR',
'CNI',
'CNL',
'COD',
'COG',
'COK',
'COL',
'COM',
'CON',
'CPV',
'CRI',
'CUB',
'CUW',
'CXR',
'CYM',
'CYP',
'CZE',
'CZK',
'DEU',
'DJI',
'DMA',
'DNK',
'DOM',
'DZA',
'ECU',
'EGY',
'ENG',
'ERI',
'ESH',
'ESP',
'EST',
'ETH',
'FIN',
'FJI',
'FLK',
'FRA',
'FRO',
'FSM',
'GAB',
'GBR',
'GEO',
'GGY',
'GHA',
'GIB',
'GIN',
'GLP',
'GMB',
'GNB',
'GNQ',
'GRC',
'GRD',
'GRL',
'GTM',
'GUF',
'GUM',
'GUY',
'HKG',
'HMD',
'HND',
'HRV',
'HTI',
'HUN',
'IDN',
'IMN',
'IND',
'IOT',
'IRL',
'IRN',
'IRQ',
'ISL',
'ISR',
'ITA',
'JAM',
'JEY',
'JOR',
'JPN',
'KAZ',
'KEN',
'KGZ',
'KHM',
'KIR',
'KNA',
'KOR',
'KOS',
'KWT',
'LAO',
'LBN',
'LBR',
'LBY',
'LCA',
'LEE',
'LIE',
'LKA',
'LSO',
'LTU',
'LUX',
'LVA',
'MAC',
'MAF',
'MAR',
'MCO',
'MDA',
'MDG',
'MDV',
'MEL',
'MEX',
'MHL',
'MKD',
'MLI',
'MLT',
'MMR',
'MNE',
'MNG',
'MNP',
'MOZ',
'MRT',
'MSR',
'MTQ',
'MUS',
'MWI',
'MYS',
'MYT',
'NAM',
'NAP',
'NCL',
'NER',
'NEU',
'NFK',
'NGA',
'NIC',
'NIR',
'NIU',
'NLD',
'NOR',
'NPL',
'NRE',
'NRU',
'NZL',
'OMN',
'PAC',
'PAK',
'PAL',
'PAN',
'PCN',
'PER',
'PHL',
'PLW',
'PNG',
'POL',
'PRI',
'PRK',
'PRT',
'PRY',
'PYF',
'QAT',
'REU',
'ROM',
'RSF',
'RUS',
'RWA',
'SAU',
'SCO',
'SDN',
'SEN',
'SGP',
'SGS',
'SHN',
'SJM',
'SLB',
'SLE',
'SLV',
'SMR',
'SOM',
'SOU',
'SPA',
'SPM',
'SRB',
'SSD',
'STP',
'SUR',
'SVK',
'SVN',
'SWE',
'SWZ',
'SXM',
'SYC',
'SYR',
'TCA',
'TCD',
'TGO',
'THA',
'TJK',
'TKL',
'TKM',
'TLS',
'TON',
'TTO',
'TUN',
'TUR',
'TUV',
'TWN',
'TZA',
'UGA',
'UKR',
'UMI',
'URY',
'USA',
'UZB',
'VAT',
'VCT',
'VEN',
'VGB',
'VIE',
'VIR',
'VNM',
'VUT',
'WAK',
'WAL',
'WIN',
'WLF',
'WSM',
'XSQ',
'XXA',
'XXB',
'XXC',
'XXD',
'XXE',
'XXF',
'XXG',
'XYZ',
'YEM',
'YUG',
'ZAF',
'ZMB',
'ZWE'];

  var fullCountryName = ['Aruba',
'Afghanistan',
'Angola',
'Anguilla',
'Aland Islands',
'Albania',
'Andorra',
'Netherlands Antilles',
'United Arab Emirates',
'Argentina',
'Armenia',
'American Samoa',
'Antarctica',
'French Southern Territories',
'Antigua and Barbuda',
'Australia',
'Austria',
'Azerbaijan',
'Azores',
'Burundi',
'Belgium',
'Benin',
'Bonaire, Sint Eustatius & Saba',
'Burkina Faso',
'Bangladesh',
'Bulgaria',
'Bahrain',
'Bahamas',
'Bosnia and Herzegovina',
'Saint Barthelemy',
'Belarus',
'Belize',
'Bermuda',
'Bolivia',
'Brazil',
'Barbados',
'British West Indies',
'Brunei Darussalam',
'Bhutan',
'Bouvet Island',
'Botswana',
'Central African Republic',
'Canada',
'Cocos (Keeling) Islands',
'Ceuta',
'Channel Islands',
'Switzerland',
'Chile',
'China',
'Cote D'+"'"+'Ivoire',
'Cameroon',
'Canary Islands',
'Canal Zone',
'Congo, The Democratic Republic',
'Congo',
'Cook Islands',
'Colombia',
'Comoros',
'Congo (Do not use-old code)',
'Cabo Verde',
'Costa Rica',
'Cuba',
'Curacao',
'Christmas Island',
'Cayman Islands',
'Cyprus',
'Czech Republic',
'Czechoslovakia',
'Germany',
'Djibouti',
'Dominica',
'Denmark',
'Dominican Republic',
'Algeria',
'Ecuador',
'Egypt',
'England',
'Eritrea',
'Western Sahara',
'Spain',
'Estonia',
'Ethiopia',
'Finland',
'Fiji',
'Falkland Islands (Malvinas)',
'France',
'Faroe Islands',
'Micronesia, Federated States',
'Gabon',
'United Kingdom',
'Georgia',
'Guernsey',
'Ghana',
'Gibraltar',
'Guinea',
'Guadeloupe',
'Gambia',
'Guinea-Bissau',
'Equatorial Guinea',
'Greece',
'Grenada',
'Greenland',
'Guatemala',
'French Guiana',
'Guam',
'Guyana',
'Hong Kong',
'Heard and McDonald Islands',
'Honduras',
'Croatia',
'Haiti',
'Hungary',
'Indonesia',
'Isle of Man',
'India',
'British Indian Ocean Territory',
'Ireland',
'Iran (Islamic Republic Of)',
'Iraq',
'Iceland',
'Israel',
'Italy',
'Jamaica',
'Jersey',
'Jordan',
'Japan',
'Kazakhstan',
'Kenya',
'Kyrgyzstan',
'Cambodia',
'Kiribati',
'Saint Kitts and Nevis',
'Korea, South',
'Kosovo',
'Kuwait',
'Laos',
'Lebanon',
'Liberia',
'Libya',
'Saint Lucia',
'Leeward Island',
'Liechtenstein',
'Sri Lanka',
'Lesotho',
'Lithuania',
'Luxembourg',
'Latvia',
'Macao',
'Saint Martin',
'Morocco',
'Monaco',
'Republic of Moldova',
'Madagascar',
'Maldives',
'Melilla',
'Mexico',
'Marshall Islands',
'Republic of Macedonia',
'Mali',
'Malta',
'Myanmar',
'Montenegro',
'Mongolia',
'Northern Mariana Islands',
'Mozambique',
'Mauritania',
'Montserrat',
'Martinique',
'Mauritius',
'Malawi',
'Malaysia',
'Mayotte',
'Namibia',
'Not Applicable',
'New Caledonia',
'Niger',
'Neutral Zone',
'Norfolk Island',
'Nigeria',
'Nicaragua',
'Northern Ireland',
'Niue',
'Netherlands',
'Norway',
'Nepal',
'Not Reported',
'Nauru',
'New Zealand',
'Oman',
'Pacific Is Trust Terr',
'Pakistan',
'Palestine',
'Panama',
'Pitcairn',
'Peru',
'Philippines',
'Palau',
'Papua New Guinea',
'Poland',
'Puerto Rico',
'Korea, North',
'Portugal',
'Paraguay',
'French Polynesia',
'Qatar',
'Reunion',
'Romania',
'Russian Federation',
'Russia (Do not use-old code)',
'Rwanda',
'Saudi Arabia',
'Scotland',
'Sudan',
'Senegal',
'Singapore',
'Sth Georgia & Sth Sandwich Is',
'Saint Helena',
'Svalbard and Jan Mayen',
'Solomon Islands',
'Sierra Leone',
'El Salvador',
'San Marino',
'Somalia',
'Southern Yemen',
'Spanish Sahara',
'Saint Pierre and Miquelon',
'Republic of Serbia',
'South Sudan',
'Sao Tome and Principe',
'Suriname',
'Slovakia',
'Slovenia',
'Sweden',
'Swaziland',
'Sint Maarten (Dutch part)',
'Seychelles',
'Syria',
'Turks and Caicos Islands',
'Chad',
'Togo',
'Thailand',
'Tajikistan',
'Tokelau',
'Turkmenistan',
'Timor-Leste',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Tuvalu',
'Taiwan',
'Tanzania',
'Uganda',
'Ukraine',
'US Minor Outlying Islands',
'Uruguay',
'United States',
'Uzbekistan',
'Holy See (Vatican City State)',
'St Vincent and the Grenadines',
'Venezuela',
'Virgin Islands (British)',
'Vietnam (Do not use-old code)',
'Virgin Islands (U.S.)',
'Vietnam',
'Vanuatu',
'Wake & Midway Islands',
'Wales',
'Windward Island',
'Wallis and Futuna Islands',
'Samoa',
'Sark',
'Stateless',
'Afcica N/R',
'America N/R',
'Asia N/R',
'Europe N/R',
'Oceania N/R',
'S America N/R',
'XYZ Not Reported',
'Yemen',
'Serbia and Montenegro',
'Republic of South Africa',
'Zambia',
'Zimbabwe'];
  
    // Logger.log(abbreviatedCountries.length);
    var sheet = SpreadsheetApp.getActiveSheet(); // Get spreadsheet
    var mailingCountryRange = sheet.getRange("N1:N12"); // Get range of N/14th column (Mailing Country). Exclude header row (N1).
    var numRows = mailingCountryRange.getNumRows(); // Get the number of rows to iterate through

      for (var i = 1; i < numRows; i++)  // For each row 
      {
        var currentCell = mailingCountryRange.getCell(i, 1)
        var currentCellValue = currentCell.getValue(); 
        // Logger.log("PART 1");
        for (var x = 0; x < abbreviatedCountries.length; x++)// for each abbreviated country
        {
          // Logger.log("PART 2");
           if(currentCellValue == abbreviatedCountries[x])
           {
              currentCell.setValue(fullCountryName[x]);
           }   
         }
      }
}
