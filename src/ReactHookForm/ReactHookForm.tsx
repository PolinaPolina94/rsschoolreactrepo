import { useForm, SubmitHandler } from "react-hook-form";
import { NavLink } from "react-router-dom";
import styles from "../UncontroledForm/UncontrolledForm.module.css";

type Inputs = {
  name: string;
  age: string;
  email: string;
  password: string;
  gender: string;
  country: string;
  checkbox: string;
};

function ReactHookForm() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors, isValid },
  } = useForm<Inputs>({
    mode: "onBlur",
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  //   console.log(watch("n")); // watch input value by passing the name of it

  return (
    <div className="container">
      <NavLink to={"/"}> return to main </NavLink>
      <section id="content">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Form</h1>
          <div>
            <label htmlFor="username"></label>
            <input
              className={styles.input}
              placeholder="name"
              {...register("name", { required: true })}
              type="text"
              id="username"
            />
            <div>{errors.name && <span>This field is required</span>}</div>
          </div>
          <div>
            <label htmlFor="userage"></label>
            <input
              className={styles.input}
              {...register("age", { required: true })}
              type="number"
              id="userage"
              placeholder="age"
            />
            <div>{errors.name && <span>This field is required</span>}</div>
          </div>
          <div>
            <label htmlFor="useremail"></label>
            <input
              className={styles.input}
              //   defaultValue="email"
              placeholder="email"
              {...register("email", { required: true })}
              type="email"
              id="useremail"
            />
            <div>{errors.name && <span>This field is required</span>}</div>
          </div>
          <div>
            <label htmlFor="password1"></label>
            <input
              className={styles.input}
              //   type="password"
              {...register("password", { required: true })}
              //   defaultValue="password"
              placeholder="password1"
              id="password1"
            />
            <div>{errors.name && <span>This field is required</span>}</div>
          </div>
          <div>
            <label htmlFor="password2"></label>
            <input
              className={styles.input}
              // type="password"
              //   defaultValue="password"
              {...register("password", { required: true })}
              id="password1"
              placeholder="password2"
            />
            <div>{errors.name && <span>This field is required</span>}</div>
          </div>
          <div>
            <input
              className={styles.inputsex}
              type="radio"
              id="female"
              name="sex"
              value="female"
            />
            <label htmlFor="female">female 👩🏻</label>
            <input
              className={styles.inputsex}
              type="radio"
              id="male"
              name="sex"
              value="male"
            />
            <label htmlFor="male">male 👨🏻</label>
          </div>
          <div>
            <datalist id="countrydata">
              <option
                value="Afghanistan"
                data-alternative-spellings="AF افغانستان"
              >
                Afghanistan
              </option>
              <option
                value="Åland Islands"
                data-alternative-spellings="AX Aaland Aland"
                data-relevancy-booster="0.5"
              >
                Åland Islands
              </option>
              <option value="Albania" data-alternative-spellings="AL">
                Albania
              </option>
              <option value="Algeria" data-alternative-spellings="DZ الجزائر">
                Algeria
              </option>
              <option
                value="American Samoa"
                data-alternative-spellings="AS"
                data-relevancy-booster="0.5"
              >
                American Samoa
              </option>
              <option
                value="Andorra"
                data-alternative-spellings="AD"
                data-relevancy-booster="0.5"
              >
                Andorra
              </option>
              <option value="Angola" data-alternative-spellings="AO">
                Angola
              </option>
              <option
                value="Anguilla"
                data-alternative-spellings="AI"
                data-relevancy-booster="0.5"
              >
                Anguilla
              </option>
              <option
                value="Antarctica"
                data-alternative-spellings="AQ"
                data-relevancy-booster="0.5"
              >
                Antarctica
              </option>
              <option
                value="Antigua And Barbuda"
                data-alternative-spellings="AG"
                data-relevancy-booster="0.5"
              >
                Antigua And Barbuda
              </option>
              <option value="Argentina" data-alternative-spellings="AR">
                Argentina
              </option>
              <option value="Armenia" data-alternative-spellings="AM Հայաստան">
                Armenia
              </option>
              <option
                value="Aruba"
                data-alternative-spellings="AW"
                data-relevancy-booster="0.5"
              >
                Aruba
              </option>
              <option
                value="Australia"
                data-alternative-spellings="AU"
                data-relevancy-booster="1.5"
              >
                Australia
              </option>
              <option
                value="Austria"
                data-alternative-spellings="AT Österreich Osterreich Oesterreich "
              >
                Austria
              </option>
              <option value="Azerbaijan" data-alternative-spellings="AZ">
                Azerbaijan
              </option>
              <option value="Bahamas" data-alternative-spellings="BS">
                Bahamas
              </option>
              <option value="Bahrain" data-alternative-spellings="BH البحرين">
                Bahrain
              </option>
              <option
                value="Bangladesh"
                data-alternative-spellings="BD বাংলাদেশ"
                data-relevancy-booster="2"
              >
                Bangladesh
              </option>
              <option value="Barbados" data-alternative-spellings="BB">
                Barbados
              </option>
              <option value="Belarus" data-alternative-spellings="BY Беларусь">
                Belarus
              </option>
              <option
                value="Belgium"
                data-alternative-spellings="BE België Belgie Belgien Belgique"
                data-relevancy-booster="1.5"
              >
                Belgium
              </option>
              <option value="Belize" data-alternative-spellings="BZ">
                Belize
              </option>
              <option value="Benin" data-alternative-spellings="BJ">
                Benin
              </option>
              <option
                value="Bermuda"
                data-alternative-spellings="BM"
                data-relevancy-booster="0.5"
              >
                Bermuda
              </option>
              <option value="Bhutan" data-alternative-spellings="BT भूटान">
                Bhutan
              </option>
              <option value="Bolivia" data-alternative-spellings="BO">
                Bolivia
              </option>
              <option
                value="Bonaire, Sint Eustatius and Saba"
                data-alternative-spellings="BQ"
              >
                Bonaire, Sint Eustatius and Saba
              </option>
              <option
                value="Bosnia and Herzegovina"
                data-alternative-spellings="BA BiH Bosna i Hercegovina Босна и Херцеговина"
              >
                Bosnia and Herzegovina
              </option>
              <option value="Botswana" data-alternative-spellings="BW">
                Botswana
              </option>
              <option value="Bouvet Island" data-alternative-spellings="BV">
                Bouvet Island
              </option>
              <option
                value="Brazil"
                data-alternative-spellings="BR Brasil"
                data-relevancy-booster="2"
              >
                Brazil
              </option>
              <option
                value="British Indian Ocean Territory"
                data-alternative-spellings="IO"
              >
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam" data-alternative-spellings="BN">
                Brunei Darussalam
              </option>
              <option value="Bulgaria" data-alternative-spellings="BG България">
                Bulgaria
              </option>
              <option value="Burkina Faso" data-alternative-spellings="BF">
                Burkina Faso
              </option>
              <option value="Burundi" data-alternative-spellings="BI">
                Burundi
              </option>
              <option value="Cambodia" data-alternative-spellings="KH កម្ពុជា">
                Cambodia
              </option>
              <option value="Cameroon" data-alternative-spellings="CM">
                Cameroon
              </option>
              <option
                value="Canada"
                data-alternative-spellings="CA"
                data-relevancy-booster="2"
              >
                Canada
              </option>
              <option value="Cape Verde" data-alternative-spellings="CV Cabo">
                Cape Verde
              </option>
              <option
                value="Cayman Islands"
                data-alternative-spellings="KY"
                data-relevancy-booster="0.5"
              >
                Cayman Islands
              </option>
              <option
                value="Central African Republic"
                data-alternative-spellings="CF"
              >
                Central African Republic
              </option>
              <option value="Chad" data-alternative-spellings="TD تشاد‎ Tchad">
                Chad
              </option>
              <option value="Chile" data-alternative-spellings="CL">
                Chile
              </option>
              <option
                value="China"
                data-relevancy-booster="3.5"
                data-alternative-spellings="CN Zhongguo Zhonghua Peoples Republic 中国/中华"
              >
                China
              </option>
              <option
                value="Christmas Island"
                data-alternative-spellings="CX"
                data-relevancy-booster="0.5"
              >
                Christmas Island
              </option>
              <option
                value="Cocos (Keeling) Islands"
                data-alternative-spellings="CC"
                data-relevancy-booster="0.5"
              >
                Cocos (Keeling) Islands
              </option>
              <option value="Colombia" data-alternative-spellings="CO">
                Colombia
              </option>
              <option value="Comoros" data-alternative-spellings="KM جزر القمر">
                Comoros
              </option>
              <option value="Congo" data-alternative-spellings="CG">
                Congo
              </option>
              <option
                value="Congo, the Democratic Republic of the"
                data-alternative-spellings="CD Congo-Brazzaville Repubilika ya Kongo"
              >
                Congo, the Democratic Republic of the
              </option>
              <option
                value="Cook Islands"
                data-alternative-spellings="CK"
                data-relevancy-booster="0.5"
              >
                Cook Islands
              </option>
              <option value="Costa Rica" data-alternative-spellings="CR">
                Costa Rica
              </option>
              <option value="Croatia" data-alternative-spellings="HR Hrvatska">
                Croatia
              </option>
              <option value="Cuba" data-alternative-spellings="CU">
                Cuba
              </option>
              <option value="Curaçao" data-alternative-spellings="CW Curacao">
                Curaçao
              </option>
              <option
                value="Cyprus"
                data-alternative-spellings="CY Κύπρος Kýpros Kıbrıs"
              >
                Cyprus
              </option>
              <option
                value="Czech Republic"
                data-alternative-spellings="CZ Česká Ceska"
              >
                Czech Republic
              </option>
              <option
                value="Denmark"
                data-alternative-spellings="DK Danmark"
                data-relevancy-booster="1.5"
              >
                Denmark
              </option>
              <option
                value="Djibouti"
                data-alternative-spellings="DJ جيبوتي‎ Jabuuti Gabuuti"
              >
                Djibouti
              </option>
              <option
                value="Dominica"
                data-alternative-spellings="DM Dominique"
                data-relevancy-booster="0.5"
              >
                Dominica
              </option>
              <option
                value="Dominican Republic"
                data-alternative-spellings="DO"
              >
                Dominican Republic
              </option>
              <option value="Ecuador" data-alternative-spellings="EC">
                Ecuador
              </option>
              <option
                value="Egypt"
                data-alternative-spellings="EG"
                data-relevancy-booster="1.5"
              >
                Egypt
              </option>
              <option value="El Salvador" data-alternative-spellings="SV">
                El Salvador
              </option>
              <option value="Equatorial Guinea" data-alternative-spellings="GQ">
                Equatorial Guinea
              </option>
              <option
                value="Eritrea"
                data-alternative-spellings="ER إرتريا ኤርትራ"
              >
                Eritrea
              </option>
              <option value="Estonia" data-alternative-spellings="EE Eesti">
                Estonia
              </option>
              <option value="Ethiopia" data-alternative-spellings="ET ኢትዮጵያ">
                Ethiopia
              </option>
              <option
                value="Falkland Islands (Malvinas)"
                data-alternative-spellings="FK"
                data-relevancy-booster="0.5"
              >
                Falkland Islands (Malvinas)
              </option>
              <option
                value="Faroe Islands"
                data-alternative-spellings="FO Føroyar Færøerne"
                data-relevancy-booster="0.5"
              >
                Faroe Islands
              </option>
              <option value="Fiji" data-alternative-spellings="FJ Viti फ़िजी">
                Fiji
              </option>
              <option value="Finland" data-alternative-spellings="FI Suomi">
                Finland
              </option>
              <option
                value="France"
                data-alternative-spellings="FR République française"
                data-relevancy-booster="2.5"
              >
                France
              </option>
              <option value="French Guiana" data-alternative-spellings="GF">
                French Guiana
              </option>
              <option
                value="French Polynesia"
                data-alternative-spellings="PF Polynésie française"
              >
                French Polynesia
              </option>
              <option
                value="French Southern Territories"
                data-alternative-spellings="TF"
              >
                French Southern Territories
              </option>
              <option
                value="Gabon"
                data-alternative-spellings="GA République Gabonaise"
              >
                Gabon
              </option>
              <option value="Gambia" data-alternative-spellings="GM">
                Gambia
              </option>
              <option
                value="Georgia"
                data-alternative-spellings="GE საქართველო"
              >
                Georgia
              </option>
              <option
                value="Germany"
                data-alternative-spellings="DE Bundesrepublik Deutschland"
                data-relevancy-booster="3"
              >
                Germany
              </option>
              <option value="Ghana" data-alternative-spellings="GH">
                Ghana
              </option>
              <option
                value="Gibraltar"
                data-alternative-spellings="GI"
                data-relevancy-booster="0.5"
              >
                Gibraltar
              </option>
              <option
                value="Greece"
                data-alternative-spellings="GR Ελλάδα"
                data-relevancy-booster="1.5"
              >
                Greece
              </option>
              <option
                value="Greenland"
                data-alternative-spellings="GL grønland"
                data-relevancy-booster="0.5"
              >
                Greenland
              </option>
              <option value="Grenada" data-alternative-spellings="GD">
                Grenada
              </option>
              <option value="Guadeloupe" data-alternative-spellings="GP">
                Guadeloupe
              </option>
              <option value="Guam" data-alternative-spellings="GU">
                Guam
              </option>
              <option value="Guatemala" data-alternative-spellings="GT">
                Guatemala
              </option>
              <option
                value="Guernsey"
                data-alternative-spellings="GG"
                data-relevancy-booster="0.5"
              >
                Guernsey
              </option>
              <option value="Guinea" data-alternative-spellings="GN">
                Guinea
              </option>
              <option value="Guinea-Bissau" data-alternative-spellings="GW">
                Guinea-Bissau
              </option>
              <option value="Guyana" data-alternative-spellings="GY">
                Guyana
              </option>
              <option value="Haiti" data-alternative-spellings="HT">
                Haiti
              </option>
              <option
                value="Heard Island and McDonald Islands"
                data-alternative-spellings="HM"
              >
                Heard Island and McDonald Islands
              </option>
              <option
                value="Holy See (Vatican City State)"
                data-alternative-spellings="VA"
                data-relevancy-booster="0.5"
              >
                Holy See (Vatican City State)
              </option>
              <option value="Honduras" data-alternative-spellings="HN">
                Honduras
              </option>
              <option value="Hong Kong" data-alternative-spellings="HK 香港">
                Hong Kong
              </option>
              <option
                value="Hungary"
                data-alternative-spellings="HU Magyarország"
              >
                Hungary
              </option>
              <option value="Iceland" data-alternative-spellings="IS Island">
                Iceland
              </option>
              <option
                value="India"
                data-alternative-spellings="IN भारत गणराज्य Hindustan"
                data-relevancy-booster="3"
              >
                India
              </option>
              <option
                value="Indonesia"
                data-alternative-spellings="ID"
                data-relevancy-booster="2"
              >
                Indonesia
              </option>
              <option
                value="Iran, Islamic Republic of"
                data-alternative-spellings="IR ایران"
              >
                Iran, Islamic Republic of
              </option>
              <option value="Iraq" data-alternative-spellings="IQ العراق‎">
                Iraq
              </option>
              <option
                value="Ireland"
                data-alternative-spellings="IE Éire"
                data-relevancy-booster="1.2"
              >
                Ireland
              </option>
              <option
                value="Isle of Man"
                data-alternative-spellings="IM"
                data-relevancy-booster="0.5"
              >
                Isle of Man
              </option>
              <option
                value="Israel"
                data-alternative-spellings="IL إسرائيل ישראל"
              >
                Israel
              </option>
              <option
                value="Italy"
                data-alternative-spellings="IT Italia"
                data-relevancy-booster="2"
              >
                Italy
              </option>
              <option value="Jamaica" data-alternative-spellings="JM">
                Jamaica
              </option>
              <option
                value="Japan"
                data-alternative-spellings="JP Nippon Nihon 日本"
                data-relevancy-booster="2.5"
              >
                Japan
              </option>
              <option
                value="Jersey"
                data-alternative-spellings="JE"
                data-relevancy-booster="0.5"
              >
                Jersey
              </option>
              <option value="Jordan" data-alternative-spellings="JO الأردن">
                Jordan
              </option>
              <option
                value="Kazakhstan"
                data-alternative-spellings="KZ Қазақстан Казахстан"
              >
                Kazakhstan
              </option>
              <option value="Kenya" data-alternative-spellings="KE">
                Kenya
              </option>
              <option value="Kiribati" data-alternative-spellings="KI">
                Kiribati
              </option>
              <option
                value="Korea, Democratic People's Republic of"
                data-alternative-spellings="KP North Korea"
              >
                Korea, Democratic People`s Republic of
              </option>
              <option
                value="Korea, Republic of"
                data-alternative-spellings="KR South Korea"
                data-relevancy-booster="1.5"
              >
                Korea, Republic of
              </option>
              <option value="Kuwait" data-alternative-spellings="KW الكويت">
                Kuwait
              </option>
              <option
                value="Kyrgyzstan"
                data-alternative-spellings="KG Кыргызстан"
              >
                Kyrgyzstan
              </option>
              <option
                value="Lao People's Democratic Republic"
                data-alternative-spellings="LA"
              >
                Lao People`s Democratic Republic
              </option>
              <option value="Latvia" data-alternative-spellings="LV Latvija">
                Latvia
              </option>
              <option value="Lebanon" data-alternative-spellings="LB لبنان">
                Lebanon
              </option>
              <option value="Lesotho" data-alternative-spellings="LS">
                Lesotho
              </option>
              <option value="Liberia" data-alternative-spellings="LR">
                Liberia
              </option>
              <option
                value="Libyan Arab Jamahiriya"
                data-alternative-spellings="LY ليبيا"
              >
                Libyan Arab Jamahiriya
              </option>
              <option value="Liechtenstein" data-alternative-spellings="LI">
                Liechtenstein
              </option>
              <option value="Lithuania" data-alternative-spellings="LT Lietuva">
                Lithuania
              </option>
              <option value="Luxembourg" data-alternative-spellings="LU">
                Luxembourg
              </option>
              <option value="Macao" data-alternative-spellings="MO">
                Macao
              </option>
              <option
                value="Macedonia, The Former Yugoslav Republic Of"
                data-alternative-spellings="MK Македонија"
              >
                Macedonia, The Former Yugoslav Republic Of
              </option>
              <option
                value="Madagascar"
                data-alternative-spellings="MG Madagasikara"
              >
                Madagascar
              </option>
              <option value="Malawi" data-alternative-spellings="MW">
                Malawi
              </option>
              <option value="Malaysia" data-alternative-spellings="MY">
                Malaysia
              </option>
              <option value="Maldives" data-alternative-spellings="MV">
                Maldives
              </option>
              <option value="Mali" data-alternative-spellings="ML">
                Mali
              </option>
              <option value="Malta" data-alternative-spellings="MT">
                Malta
              </option>
              <option
                value="Marshall Islands"
                data-alternative-spellings="MH"
                data-relevancy-booster="0.5"
              >
                Marshall Islands
              </option>
              <option value="Martinique" data-alternative-spellings="MQ">
                Martinique
              </option>
              <option
                value="Mauritania"
                data-alternative-spellings="MR الموريتانية"
              >
                Mauritania
              </option>
              <option value="Mauritius" data-alternative-spellings="MU">
                Mauritius
              </option>
              <option value="Mayotte" data-alternative-spellings="YT">
                Mayotte
              </option>
              <option
                value="Mexico"
                data-alternative-spellings="MX Mexicanos"
                data-relevancy-booster="1.5"
              >
                Mexico
              </option>
              <option
                value="Micronesia, Federated States of"
                data-alternative-spellings="FM"
              >
                Micronesia, Federated States of
              </option>
              <option
                value="Moldova, Republic of"
                data-alternative-spellings="MD"
              >
                Moldova, Republic of
              </option>
              <option value="Monaco" data-alternative-spellings="MC">
                Monaco
              </option>
              <option
                value="Mongolia"
                data-alternative-spellings="MN Mongγol ulus Монгол улс"
              >
                Mongolia
              </option>
              <option value="Montenegro" data-alternative-spellings="ME">
                Montenegro
              </option>
              <option
                value="Montserrat"
                data-alternative-spellings="MS"
                data-relevancy-booster="0.5"
              >
                Montserrat
              </option>
              <option value="Morocco" data-alternative-spellings="MA المغرب">
                Morocco
              </option>
              <option
                value="Mozambique"
                data-alternative-spellings="MZ Moçambique"
              >
                Mozambique
              </option>
              <option value="Myanmar" data-alternative-spellings="MM">
                Myanmar
              </option>
              <option value="Namibia" data-alternative-spellings="NA Namibië">
                Namibia
              </option>
              <option
                value="Nauru"
                data-alternative-spellings="NR Naoero"
                data-relevancy-booster="0.5"
              >
                Nauru
              </option>
              <option value="Nepal" data-alternative-spellings="NP नेपाल">
                Nepal
              </option>
              <option
                value="Netherlands"
                data-alternative-spellings="NL Holland Nederland"
                data-relevancy-booster="1.5"
              >
                Netherlands
              </option>
              <option
                value="New Caledonia"
                data-alternative-spellings="NC"
                data-relevancy-booster="0.5"
              >
                New Caledonia
              </option>
              <option
                value="New Zealand"
                data-alternative-spellings="NZ Aotearoa"
              >
                New Zealand
              </option>
              <option value="Nicaragua" data-alternative-spellings="NI">
                Nicaragua
              </option>
              <option value="Niger" data-alternative-spellings="NE Nijar">
                Niger
              </option>
              <option
                value="Nigeria"
                data-alternative-spellings="NG Nijeriya Naíjíríà"
                data-relevancy-booster="1.5"
              >
                Nigeria
              </option>
              <option
                value="Niue"
                data-alternative-spellings="NU"
                data-relevancy-booster="0.5"
              >
                Niue
              </option>
              <option
                value="Norfolk Island"
                data-alternative-spellings="NF"
                data-relevancy-booster="0.5"
              >
                Norfolk Island
              </option>
              <option
                value="Northern Mariana Islands"
                data-alternative-spellings="MP"
                data-relevancy-booster="0.5"
              >
                Northern Mariana Islands
              </option>
              <option
                value="Norway"
                data-alternative-spellings="NO Norge Noreg"
                data-relevancy-booster="1.5"
              >
                Norway
              </option>
              <option value="Oman" data-alternative-spellings="OM عمان">
                Oman
              </option>
              <option
                value="Pakistan"
                data-alternative-spellings="PK پاکستان"
                data-relevancy-booster="2"
              >
                Pakistan
              </option>
              <option
                value="Palau"
                data-alternative-spellings="PW"
                data-relevancy-booster="0.5"
              >
                Palau
              </option>
              <option
                value="Palestinian Territory, Occupied"
                data-alternative-spellings="PS فلسطين"
              >
                Palestinian Territory, Occupied
              </option>
              <option value="Panama" data-alternative-spellings="PA">
                Panama
              </option>
              <option value="Papua New Guinea" data-alternative-spellings="PG">
                Papua New Guinea
              </option>
              <option value="Paraguay" data-alternative-spellings="PY">
                Paraguay
              </option>
              <option value="Peru" data-alternative-spellings="PE">
                Peru
              </option>
              <option
                value="Philippines"
                data-alternative-spellings="PH Pilipinas"
                data-relevancy-booster="1.5"
              >
                Philippines
              </option>
              <option
                value="Pitcairn"
                data-alternative-spellings="PN"
                data-relevancy-booster="0.5"
              >
                Pitcairn
              </option>
              <option
                value="Poland"
                data-alternative-spellings="PL Polska"
                data-relevancy-booster="1.25"
              >
                Poland
              </option>
              <option
                value="Portugal"
                data-alternative-spellings="PT Portuguesa"
                data-relevancy-booster="1.5"
              >
                Portugal
              </option>
              <option value="Puerto Rico" data-alternative-spellings="PR">
                Puerto Rico
              </option>
              <option value="Qatar" data-alternative-spellings="QA قطر">
                Qatar
              </option>
              <option value="Réunion" data-alternative-spellings="RE Reunion">
                Réunion
              </option>
              <option
                value="Romania"
                data-alternative-spellings="RO Rumania Roumania România"
              >
                Romania
              </option>
              <option
                value="Russian Federation"
                data-alternative-spellings="RU Rossiya Российская Россия"
                data-relevancy-booster="2.5"
              >
                Russian Federation
              </option>
              <option value="Rwanda" data-alternative-spellings="RW">
                Rwanda
              </option>
              <option
                value="Saint Barthélemy"
                data-alternative-spellings="BL St. Barthelemy"
              >
                Saint Barthélemy
              </option>
              <option value="Saint Helena" data-alternative-spellings="SH St.">
                Saint Helena
              </option>
              <option
                value="Saint Kitts and Nevis"
                data-alternative-spellings="KN St."
              >
                Saint Kitts and Nevis
              </option>
              <option value="Saint Lucia" data-alternative-spellings="LC St.">
                Saint Lucia
              </option>
              <option
                value="Saint Martin (French Part)"
                data-alternative-spellings="MF St."
              >
                Saint Martin (French Part)
              </option>
              <option
                value="Saint Pierre and Miquelon"
                data-alternative-spellings="PM St."
              >
                Saint Pierre and Miquelon
              </option>
              <option
                value="Saint Vincent and the Grenadines"
                data-alternative-spellings="VC St."
              >
                Saint Vincent and the Grenadines
              </option>
              <option value="Samoa" data-alternative-spellings="WS">
                Samoa
              </option>
              <option
                value="San Marino"
                data-alternative-spellings="SM RSM Repubblica"
              >
                San Marino
              </option>
              <option
                value="Sao Tome and Principe"
                data-alternative-spellings="ST"
              >
                Sao Tome and Principe
              </option>
              <option
                value="Saudi Arabia"
                data-alternative-spellings="SA السعودية"
              >
                Saudi Arabia
              </option>
              <option value="Senegal" data-alternative-spellings="SN Sénégal">
                Senegal
              </option>
              <option
                value="Serbia"
                data-alternative-spellings="RS Србија Srbija"
              >
                Serbia
              </option>
              <option
                value="Seychelles"
                data-alternative-spellings="SC"
                data-relevancy-booster="0.5"
              >
                Seychelles
              </option>
              <option value="Sierra Leone" data-alternative-spellings="SL">
                Sierra Leone
              </option>
              <option
                value="Singapore"
                data-alternative-spellings="SG Singapura  சிங்கப்பூர் குடியரசு 新加坡共和国"
              >
                Singapore
              </option>
              <option
                value="Sint Maarten (Dutch Part)"
                data-alternative-spellings="SX"
              >
                Sint Maarten (Dutch Part)
              </option>
              <option
                value="Slovakia"
                data-alternative-spellings="SK Slovenská Slovensko"
              >
                Slovakia
              </option>
              <option
                value="Slovenia"
                data-alternative-spellings="SI Slovenija"
              >
                Slovenia
              </option>
              <option value="Solomon Islands" data-alternative-spellings="SB">
                Solomon Islands
              </option>
              <option value="Somalia" data-alternative-spellings="SO الصومال">
                Somalia
              </option>
              <option
                value="South Africa"
                data-alternative-spellings="ZA RSA Suid-Afrika"
              >
                South Africa
              </option>
              <option
                value="South Georgia and the South Sandwich Islands"
                data-alternative-spellings="GS"
              >
                South Georgia and the South Sandwich Islands
              </option>
              <option value="South Sudan" data-alternative-spellings="SS">
                South Sudan
              </option>
              <option
                value="Spain"
                data-alternative-spellings="ES España"
                data-relevancy-booster="2"
              >
                Spain
              </option>
              <option
                value="Sri Lanka"
                data-alternative-spellings="LK ශ්‍රී ලංකා இலங்கை Ceylon"
              >
                Sri Lanka
              </option>
              <option value="Sudan" data-alternative-spellings="SD السودان">
                Sudan
              </option>
              <option
                value="Suriname"
                data-alternative-spellings="SR शर्नम् Sarnam Sranangron"
              >
                Suriname
              </option>
              <option
                value="Svalbard and Jan Mayen"
                data-alternative-spellings="SJ"
                data-relevancy-booster="0.5"
              >
                Svalbard and Jan Mayen
              </option>
              <option
                value="Swaziland"
                data-alternative-spellings="SZ weSwatini Swatini Ngwane"
              >
                Swaziland
              </option>
              <option
                value="Sweden"
                data-alternative-spellings="SE Sverige"
                data-relevancy-booster="1.5"
              >
                Sweden
              </option>
              <option
                value="Switzerland"
                data-alternative-spellings="CH Swiss Confederation Schweiz Suisse Svizzera Svizra"
                data-relevancy-booster="1.5"
              >
                Switzerland
              </option>
              <option
                value="Syrian Arab Republic"
                data-alternative-spellings="SY Syria سورية"
              >
                Syrian Arab Republic
              </option>
              <option
                value="Taiwan, Province of China"
                data-alternative-spellings="TW 台灣 臺灣"
              >
                Taiwan, Province of China
              </option>
              <option
                value="Tajikistan"
                data-alternative-spellings="TJ Тоҷикистон Toçikiston"
              >
                Tajikistan
              </option>
              <option
                value="Tanzania, United Republic of"
                data-alternative-spellings="TZ"
              >
                Tanzania, United Republic of
              </option>
              <option
                value="Thailand"
                data-alternative-spellings="TH ประเทศไทย Prathet Thai"
              >
                Thailand
              </option>
              <option value="Timor-Leste" data-alternative-spellings="TL">
                Timor-Leste
              </option>
              <option value="Togo" data-alternative-spellings="TG Togolese">
                Togo
              </option>
              <option
                value="Tokelau"
                data-alternative-spellings="TK"
                data-relevancy-booster="0.5"
              >
                Tokelau
              </option>
              <option value="Tonga" data-alternative-spellings="TO">
                Tonga
              </option>
              <option
                value="Trinidad and Tobago"
                data-alternative-spellings="TT"
              >
                Trinidad and Tobago
              </option>
              <option value="Tunisia" data-alternative-spellings="TN تونس">
                Tunisia
              </option>
              <option
                value="Turkey"
                data-alternative-spellings="TR Türkiye Turkiye"
              >
                Turkey
              </option>
              <option
                value="Turkmenistan"
                data-alternative-spellings="TM Türkmenistan"
              >
                Turkmenistan
              </option>
              <option
                value="Turks and Caicos Islands"
                data-alternative-spellings="TC"
                data-relevancy-booster="0.5"
              >
                Turks and Caicos Islands
              </option>
              <option
                value="Tuvalu"
                data-alternative-spellings="TV"
                data-relevancy-booster="0.5"
              >
                Tuvalu
              </option>
              <option value="Uganda" data-alternative-spellings="UG">
                Uganda
              </option>
              <option
                value="Ukraine"
                data-alternative-spellings="UA Ukrayina Україна"
              >
                Ukraine
              </option>
              <option
                value="United Arab Emirates"
                data-alternative-spellings="AE UAE الإمارات"
              >
                United Arab Emirates
              </option>
              <option
                value="United Kingdom"
                data-alternative-spellings="GB Great Britain England UK Wales Scotland Northern Ireland"
                data-relevancy-booster="2.5"
              >
                United Kingdom
              </option>
              <option
                value="United States"
                data-relevancy-booster="3.5"
                data-alternative-spellings="US USA United States of America"
              >
                United States
              </option>
              <option
                value="United States Minor Outlying Islands"
                data-alternative-spellings="UM"
              >
                United States Minor Outlying Islands
              </option>
              <option value="Uruguay" data-alternative-spellings="UY">
                Uruguay
              </option>
              <option
                value="Uzbekistan"
                data-alternative-spellings="UZ Ўзбекистон O'zbekstan O‘zbekiston"
              >
                Uzbekistan
              </option>
              <option value="Vanuatu" data-alternative-spellings="VU">
                Vanuatu
              </option>
              <option value="Venezuela" data-alternative-spellings="VE">
                Venezuela
              </option>
              <option
                value="Vietnam"
                data-alternative-spellings="VN Việt Nam"
                data-relevancy-booster="1.5"
              >
                Vietnam
              </option>
              <option
                value="Virgin Islands, British"
                data-alternative-spellings="VG"
                data-relevancy-booster="0.5"
              >
                Virgin Islands, British
              </option>
              <option
                value="Virgin Islands, U.S."
                data-alternative-spellings="VI"
                data-relevancy-booster="0.5"
              >
                Virgin Islands, U.S.
              </option>
              <option
                value="Wallis and Futuna"
                data-alternative-spellings="WF"
                data-relevancy-booster="0.5"
              >
                Wallis and Futuna
              </option>
              <option
                value="Western Sahara"
                data-alternative-spellings="EH لصحراء الغربية"
              >
                Western Sahara
              </option>
              <option value="Yemen" data-alternative-spellings="YE اليمن">
                Yemen
              </option>
              <option value="Zambia" data-alternative-spellings="ZM">
                Zambia
              </option>
              <option value="Zimbabwe" data-alternative-spellings="ZW">
                Zimbabwe
              </option>
            </datalist>
            <label htmlFor="country">choose a country</label> <br></br>
            <input
              className={styles.input}
              type="text"
              list="countrydata"
              id="country"
              //   name="country"
              //   size="50"
              autoComplete="off"
              {...register("country", { required: true })}
            />
            {errors.country && <span>This field is required</span>}
          </div>
          <div>
            <label htmlFor="photo">choose a photo (jpeg/png)</label> <br></br>
            <input
              className={styles.inputphoto}
              type="file"
              name="photo"
              accept="image/jpeg,image/png"
              id="photo"
            />
          </div>
          <div>
            <input
              className={styles.inputagree}
              type="checkbox"
              //   defaultValue="password"
              {...register("checkbox", { required: true })}
              id="checkbox"
            />
            <label htmlFor="checkbox">
              By checking this box, I agree with Terms and Conditions.
            </label>
            <div>{errors.name && <span>This field is required</span>}</div>
          </div>
          <button
            type="submit"
            className={styles.inputsubmit}
            disabled={!isValid}
          >
            {" "}
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default ReactHookForm;
