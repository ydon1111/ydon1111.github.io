window.onload = function () {
  JournalSCI();

  const smallSidebar = document.querySelector('.small-sidebar');
  const content = document.querySelector('#content');

  smallSidebar.style.height = content.offsetHeight + 'px';
};


function JournalSCI() {
  resetButtons()
  const papers = `Changwon Wang, Chungkeun Lee and, Hangsik Shin, “Digital therapeutics from bench to bedside,” npj Digital Medicine, 6(38), 2023
Hangsik Shin, “A novel method for non‐invasive blood pressure estimation based on continuous pulse transit time: An observational study,” Psychophysiology, 60(2), e14173, 2023 
Hangsik Shin, “Photoplethysmogram based vascular aging assessment using the deep convolutional neural network,” Scientific Reports, 12, 11377, 2022 
Hangsik Shin, “XGBoost Regression of the Most Significant Photoplethysmogram Features for Assessing Vascular Aging,” IEEE Journal of Biomedical and Health Informatics, 26(7), 3354-3361, 2022
Hangsik Shin, “Deep Convolutional Neural Network based Signal Quality Assessment for Photoplethysmogram,” Computers in Biology and Medicine, 145, 105430, 2022 
Junyung Park, Hangsik Shin, “Vascular Aging Estimation Based on Artificial Neural Network Using Photoplethysmogram Waveform Decomposition: Retrospective Cohort Study,” JMIR Medical Informatics, 10(3), 1-17, 2022 
Oh-Seok Kwon, Jisu Lee, Je-Wook Park, So-Hyun Yang, Inseok Hwang, Hee Tae Yu, Hangsik Shin and Hui-Nam Pak, “Three-Dimensional Atrial Wall Thickness Measurement Algorithm from a Segmented Atrial Wall using a Partial Differential Equation,” IEEE ACCESS, 10, 32161-32170, 2022 
Hangsik Shin, “Deep Convolutional Neural Network-Based Hemiplegic Gait Detection Using an Inertial Sensor Located Freely in a Pocket,” Sensors, 22(5), 1920, 2022 
Junyung Park, Hyeon Seok Seok, Sang-Su Kim and Hangsik Shin, “Photoplethysmogram Analysis and Applications: An Integrative Review,” Frontiers in Physiology, 12, 1-23, 2022
Hyeon Seok Seok and Hangsik Shin, “Recommendation for Measuring Digital Volume Pulse in Mobile Application: for Healthy Normal Subject,” IEEE ACCESS, 9, 69335-69345, 2021
Danbi Gwon, Hakyung Cho and Hangsik Shin, “Feasibility of a Waistband-type Wireless Wearable Electrocardiogram Monitoring System based on a Textile Electrode,” JMIR mHealth and uHealth, 9(5), e26469, 2021
Jin Woong Kim, Hyeon Seok Seok and Hangsik Shin, “Is Ultra-Short-Term Heart Rate Variability Valid in Non-static Conditions?,” Frontiers in Physiology, 12, 596060, 2021 
Donggeun Roh and Hangsik Shin, “Recurrence Plot and Machine Learning for Signal Quality Assessment of Photoplethysmogram in Mobile Environment,” Sensors, 21(6), 2188, 2021 
Byung-Moon Choi, Hangsik Shin, Joo-Hyun Lee, Ji-Yeon Bang, Eun-Kyung Lee and Gyujeong Noh, “Performance of the Surgical Pleth Index and Analgesia Nociception Index in Healthy Volunteers and Parturients,” Frontiers in Physiology, 12, 554026, 2021 
Byung-Moon Choi, Ji Yeon Yim, Hangsik Shin, Gyujeong Noh, “Novel Analgesic Index for Postoperative Pain Assessment Based on a Photoplethysmographic Spectrogram and Convolutional Neural Network: Observational Study,” Journal of Medical Internet Research, 23(2), e23920, 2021
Hangsik Shin and Ahyoung Choi, “Calculation and Validation of Continuous Pulse Transit Time Based on Normalized Pulse Wave Velocity,” IEEE ACCESS, 8, 221632-221639, 2020 
Junyung Park, Sangki Park, Seongcheol Ahn, Yujang Cho, Jong-Jin Park and Hangsik Shin, “Wearable Strain Sensor Using Conductive Yarn Sewed on Clothing for Human Respiratory Monitoring,” IEEE Sensors Journal, 20(21), 12628-12636, 2020
Seongcheol Ahn, Yujang Cho, Sangki Park, Junseo Kim, Jingzhe Sun, Dahye Ahn, Miyeon Lee, Daeeun Kim, Taeyun Kim, Hangsik Shin and Jong-Jin Park, “Wearable multimode sensors with amplified piezoelectricity due to the multi local strain using 3D textile structure for detecting human body signals,” Nano Energy, 74, 104932, 2020
Ahyoung Choi, Sangwoo Noh and Hangsik Shin, “Internet-Based Unobtrusive Tele-Monitoring System for Sleep and Respiration,” IEEE ACCESS, 8, 76700-76707, 2020 
Chanki Park, Min-Ho Yang, BoHyun Choi, Bokyung Jeon, Yong-Hun Lee, Hangsik Shin, Boreom Lee, Byung-Moon Choi and Gyu-Jeong Noh, “Performance of the nasal photoplethysmographic index as an analgesic index during surgery under general anaesthesia,” Scientific Reports, 10, 7130, 2020 
Donggeun Roh, Sangjin Han, Junyung Park and Hangsik Shin, “Development of a Multi-Array Pressure Sensor Module for Radial Artery Pulse Wave Measurement,” Sensors, 20(1), 33, 2020 
Sangjin Han, Donggeun Roh and Hangsik Shin, “Design of Multi-Wavelength Optical Sensor Module for Depth-Dependent Photoplethysmography,” Sensors, 19(24), 5441, 2019
Hyeon Seok Seok, Byung-Moon Choi, Gyu-Jeong Noh and Hangsik Shin, “Postoperative Pain Assessment Model Based on Pulse Contour Characteristics Analysis,” IEEE Journal of Biomedical and Health Informatics, 23(6), 2317-2324, 2019 
Changwon Wang, Young Kim, Hangsik Shin and Se Dong Min, “Preliminary Clinical Application of Textile Insole Sensor for Hemiparetic Gait Pattern Analysis,” Sensors, 19(18), 3950, 2019
Jaepil Kim, Jeong-Whan Lee and Hangsik Shin, “Pre-processing of Photoplethysmographic Waveform for Amplitude Regularization,” Journal of Electrical Engineering & Technology, 14(4), 1741-1748, 2019 
Sooji Park, Hyong-Ho Cho, Hyung Chae Yang, Jin-Sang Yoon and Hangsik Shin, “Force-Sensing-Based Unobtrusive System for Awakening and Respiration Rate Analysis during Sleep,” IEEE Sensors Journal, 19(5), 1917-1924, 2019
Wookjin Lee, Jaiyoung Ryu, Hangsik Shin, Hong Sun Ryou and Seong Wook Cho, “Numerical study to evaluate the effect of a surface-based sensor on arterial tonometry,” Computer Methods in Biomechanics and Biomedical Engineering, 27(6), 556-572, 2018 
Ahyoung Choi and Hangsik Shin, “Longitudinal healthcare data management platform of healthcare IoT device for personalized services,” Journal of Universal Computer Science, 24(9), 1153-1169, 2018
Byung-Moon Choi, Chanki Park, Yong-Hun Lee, Hangsik Shin, Soo-Han Lee, Seongwook Jeong, Gyu-Jeong Noh and Boreom Lee, “Development of a new analgesic index using nasal photoplethysmography,” Anaesthesia, 73(9), 1123-1130, 2018 
Yoon La Yang, Hyeon Seok Seok, Gyu-Jeong Noh, Byung-Moon Choi and Hangsik Shin, “Postoperative pain assessment index based on Photoplethysmography,” Frontiers in Physiology, 9, 1199, 2018 
Ahyoung Choi and Hangsik Shin, “Quantitative analysis of the effect of an ectopic beat on heart rate variability in the resting condition,” Frontiers in physiology, 9, 922, 2018
Jun Seok Lee, Sooji Park and Hangsik Shin, “Detection of hemiplegic walking using a wearable inertia sensing device,” Sensors, 18(6), 1736, 2018 
Ahyoung Choi and Hangsik Shin, “Reply to Comment on “Photoplethysmography sampling frequency: pilot assessment of how low can we go to analyze pulse rate variability with reliability?,” Physiological Measurement, 38(12), 2252-2256, 2017 
Sooji Park and Hangsik Shin, “Feasibility Study for Monitoring Unconstrained Respiration based on Multi-way Approach Using an Acceleration and Force Sensing Module,” IEEE Sensors Journal, 17(11), 3482-3489, 2017
Ahyoung Choi and Hangsik Shin, “Photoplethysmography sampling frequency: pilot assessment of how low can we go to analyze pulse rate variability with reliability?,” Physiological Measurement, 38(3), 586-600, 2017
Hangsik Shin, Byunghun Choi, Doyoon Kim and Jaegeol Cho, “Robust Sleep Quality Quantification Method for a Personal Handheld Device,” Telemedicine & e-Health, 20(6), 522-530, 2014
Yonghyeon Yun, Minki Hwang, Jae Hyung Park, Hangsik Shin, Eun Bo Shim and Hui-Nam Pak, “The Relationship among Complex Fractionated Electrograms, Wavebreak, Phase Singularity, and Local Dominant Frequency in Fibrillation Wave-Dynamics: a Modeling Comparison Study,” Journal of Korean Medical Science, 29(3), 370-377, 2014
Chungkeun Lee, Hangsik Shin, Jongchul Park and Myoungho Lee, “The Optimal Attachment Position for a Fingertip Photoplethysmographic Sensor with Low DC,” IEEE Sensor Journal, 12(5), 1253-1254, 2012
Chungkeun Lee, Hangsik Shin and Myoungho Lee, “Relations between AC-DC components and optical path length in photoplethysmography,” Journal of Biomedical Optics, 16(7), 077012-077012-4, 2011
Se Dong Min, Jin Kwon Kim, Hangsik Shin, Yong Hyeon Yun, Chungkeun Lee and Myoungho Lee, “Noncontact Respiration Rate Measurement System Using an Ultrasonic Proximity Sensor,” IEEE Sensor Journal, 10(11), 1732-1739, 2010
Hangsik Shin, Chungkeun Lee and Myoungho Lee, “Ideal Filtering Approach on DCT Domain for Biomedical Signals: Index Blocked DCT Filtering Method (IB-DCTFM),” Journal of Medical Systems, 34(4), 741-753, 2010
Hangsik Shin, Chungkeun Lee and Myoungho Lee, “Adaptive threshold method for the peak detection of photoplethysmographic waveform,” Computers in Biology and Medicine, 39(12), 1145-1152, 2009
Jinkwon Kim, Hangsik Shin, Kwangsoo Shin, Myoungho Lee, “Robust Algorithm for Arrhythmia Classification in ECG Using Extreme Learning Machine,” Biomedical Engineering Online, 8(31), 1-12, 2009
Myoungho Lee, Se Dong Min, Hangsik Shin, Byung Woo Lee and Jinkwon Kim, “The e-Health Landscape: Current Status and Future Prospects in Korea,” Telemedicine & e-Health, 15(4), 362-369, 2009 
Sung Won Yoon, Hangsik Shin, Se Dong Min and Myoungho Lee, “Adaptive motion artifacts reduction algorithm for ECG signal in textile wearable sensor,” IEICE Electronics Express, 4(10), 312-318, 2007`;

  document.getElementById("journalSCIPara").classList.add("clicked");
  const paperArray = papers.split('\n');
  let paperList = '';
  for (let i = 0; i < paperArray.length; i++) {
    const paperInfo = paperArray[i];
    paperList += `<a href="#" onclick="openPaper(${i})" style="color: black; text-decoration: none; border: none;">${i + 1}. ${paperInfo}</a><br><br>`;
  }

  const element = document.getElementById('my_div');
  element.innerHTML = paperList;
}

function openPaper(paperIndex) {
  const paperLinks = [
    '링크1', '링크2', '링크3', '링크4', '링크5', // 논문에 대한 실제 링크 URL

  ];

  if (paperIndex >= 0 && paperIndex < paperLinks.length) {
    // 논문 링크 URL로 이동 또는 다른 동작을 수행하는 로직을 추가하세요.
    window.location.href = paperLinks[paperIndex]; // 예: 클릭 시 해당 URL로 이동
  }

}


function setInnerText() {
  resetButtons()
  const papers = `Changwon Wang, Chungkeun Lee and, Hangsik Shin, “Digital therapeutics from bench to bedside,” npj Digital Medicine, 6(38), 2023
Hangsik Shin, “A novel method for non‐invasive blood pressure estimation based on continuous pulse transit time: An observational study,” Psychophysiology, 60(2), e14173, 2023 
Hangsik Shin, “Photoplethysmogram based vascular aging assessment using the deep convolutional neural network,” Scientific Reports, 12, 11377, 2022 
Hangsik Shin, “XGBoost Regression of the Most Significant Photoplethysmogram Features for Assessing Vascular Aging,” IEEE Journal of Biomedical and Health Informatics, 26(7), 3354-3361, 2022
Hangsik Shin, “Deep Convolutional Neural Network based Signal Quality Assessment for Photoplethysmogram,” Computers in Biology and Medicine, 145, 105430, 2022 
Junyung Park, Hangsik Shin, “Vascular Aging Estimation Based on Artificial Neural Network Using Photoplethysmogram Waveform Decomposition: Retrospective Cohort Study,” JMIR Medical Informatics, 10(3), 1-17, 2022 
Oh-Seok Kwon, Jisu Lee, Je-Wook Park, So-Hyun Yang, Inseok Hwang, Hee Tae Yu, Hangsik Shin and Hui-Nam Pak, “Three-Dimensional Atrial Wall Thickness Measurement Algorithm from a Segmented Atrial Wall using a Partial Differential Equation,” IEEE ACCESS, 10, 32161-32170, 2022 
Hangsik Shin, “Deep Convolutional Neural Network-Based Hemiplegic Gait Detection Using an Inertial Sensor Located Freely in a Pocket,” Sensors, 22(5), 1920, 2022 
Junyung Park, Hyeon Seok Seok, Sang-Su Kim and Hangsik Shin, “Photoplethysmogram Analysis and Applications: An Integrative Review,” Frontiers in Physiology, 12, 1-23, 2022
Hyeon Seok Seok and Hangsik Shin, “Recommendation for Measuring Digital Volume Pulse in Mobile Application: for Healthy Normal Subject,” IEEE ACCESS, 9, 69335-69345, 2021
Danbi Gwon, Hakyung Cho and Hangsik Shin, “Feasibility of a Waistband-type Wireless Wearable Electrocardiogram Monitoring System based on a Textile Electrode,” JMIR mHealth and uHealth, 9(5), e26469, 2021
Jin Woong Kim, Hyeon Seok Seok and Hangsik Shin, “Is Ultra-Short-Term Heart Rate Variability Valid in Non-static Conditions?,” Frontiers in Physiology, 12, 596060, 2021 
Donggeun Roh and Hangsik Shin, “Recurrence Plot and Machine Learning for Signal Quality Assessment of Photoplethysmogram in Mobile Environment,” Sensors, 21(6), 2188, 2021 
Byung-Moon Choi, Hangsik Shin, Joo-Hyun Lee, Ji-Yeon Bang, Eun-Kyung Lee and Gyujeong Noh, “Performance of the Surgical Pleth Index and Analgesia Nociception Index in Healthy Volunteers and Parturients,” Frontiers in Physiology, 12, 554026, 2021 
Byung-Moon Choi, Ji Yeon Yim, Hangsik Shin, Gyujeong Noh, “Novel Analgesic Index for Postoperative Pain Assessment Based on a Photoplethysmographic Spectrogram and Convolutional Neural Network: Observational Study,” Journal of Medical Internet Research, 23(2), e23920, 2021
Hangsik Shin and Ahyoung Choi, “Calculation and Validation of Continuous Pulse Transit Time Based on Normalized Pulse Wave Velocity,” IEEE ACCESS, 8, 221632-221639, 2020 
Junyung Park, Sangki Park, Seongcheol Ahn, Yujang Cho, Jong-Jin Park and Hangsik Shin, “Wearable Strain Sensor Using Conductive Yarn Sewed on Clothing for Human Respiratory Monitoring,” IEEE Sensors Journal, 20(21), 12628-12636, 2020
Seongcheol Ahn, Yujang Cho, Sangki Park, Junseo Kim, Jingzhe Sun, Dahye Ahn, Miyeon Lee, Daeeun Kim, Taeyun Kim, Hangsik Shin and Jong-Jin Park, “Wearable multimode sensors with amplified piezoelectricity due to the multi local strain using 3D textile structure for detecting human body signals,” Nano Energy, 74, 104932, 2020
Ahyoung Choi, Sangwoo Noh and Hangsik Shin, “Internet-Based Unobtrusive Tele-Monitoring System for Sleep and Respiration,” IEEE ACCESS, 8, 76700-76707, 2020 
Chanki Park, Min-Ho Yang, BoHyun Choi, Bokyung Jeon, Yong-Hun Lee, Hangsik Shin, Boreom Lee, Byung-Moon Choi and Gyu-Jeong Noh, “Performance of the nasal photoplethysmographic index as an analgesic index during surgery under general anaesthesia,” Scientific Reports, 10, 7130, 2020 
Donggeun Roh, Sangjin Han, Junyung Park and Hangsik Shin, “Development of a Multi-Array Pressure Sensor Module for Radial Artery Pulse Wave Measurement,” Sensors, 20(1), 33, 2020 
Sangjin Han, Donggeun Roh and Hangsik Shin, “Design of Multi-Wavelength Optical Sensor Module for Depth-Dependent Photoplethysmography,” Sensors, 19(24), 5441, 2019
Hyeon Seok Seok, Byung-Moon Choi, Gyu-Jeong Noh and Hangsik Shin, “Postoperative Pain Assessment Model Based on Pulse Contour Characteristics Analysis,” IEEE Journal of Biomedical and Health Informatics, 23(6), 2317-2324, 2019 
Changwon Wang, Young Kim, Hangsik Shin and Se Dong Min, “Preliminary Clinical Application of Textile Insole Sensor for Hemiparetic Gait Pattern Analysis,” Sensors, 19(18), 3950, 2019
Jaepil Kim, Jeong-Whan Lee and Hangsik Shin, “Pre-processing of Photoplethysmographic Waveform for Amplitude Regularization,” Journal of Electrical Engineering & Technology, 14(4), 1741-1748, 2019 
Sooji Park, Hyong-Ho Cho, Hyung Chae Yang, Jin-Sang Yoon and Hangsik Shin, “Force-Sensing-Based Unobtrusive System for Awakening and Respiration Rate Analysis during Sleep,” IEEE Sensors Journal, 19(5), 1917-1924, 2019
Wookjin Lee, Jaiyoung Ryu, Hangsik Shin, Hong Sun Ryou and Seong Wook Cho, “Numerical study to evaluate the effect of a surface-based sensor on arterial tonometry,” Computer Methods in Biomechanics and Biomedical Engineering, 27(6), 556-572, 2018 
Ahyoung Choi and Hangsik Shin, “Longitudinal healthcare data management platform of healthcare IoT device for personalized services,” Journal of Universal Computer Science, 24(9), 1153-1169, 2018
Byung-Moon Choi, Chanki Park, Yong-Hun Lee, Hangsik Shin, Soo-Han Lee, Seongwook Jeong, Gyu-Jeong Noh and Boreom Lee, “Development of a new analgesic index using nasal photoplethysmography,” Anaesthesia, 73(9), 1123-1130, 2018 
Yoon La Yang, Hyeon Seok Seok, Gyu-Jeong Noh, Byung-Moon Choi and Hangsik Shin, “Postoperative pain assessment index based on Photoplethysmography,” Frontiers in Physiology, 9, 1199, 2018 
Ahyoung Choi and Hangsik Shin, “Quantitative analysis of the effect of an ectopic beat on heart rate variability in the resting condition,” Frontiers in physiology, 9, 922, 2018
Jun Seok Lee, Sooji Park and Hangsik Shin, “Detection of hemiplegic walking using a wearable inertia sensing device,” Sensors, 18(6), 1736, 2018 
Ahyoung Choi and Hangsik Shin, “Reply to Comment on “Photoplethysmography sampling frequency: pilot assessment of how low can we go to analyze pulse rate variability with reliability?,” Physiological Measurement, 38(12), 2252-2256, 2017 
Sooji Park and Hangsik Shin, “Feasibility Study for Monitoring Unconstrained Respiration based on Multi-way Approach Using an Acceleration and Force Sensing Module,” IEEE Sensors Journal, 17(11), 3482-3489, 2017
Ahyoung Choi and Hangsik Shin, “Photoplethysmography sampling frequency: pilot assessment of how low can we go to analyze pulse rate variability with reliability?,” Physiological Measurement, 38(3), 586-600, 2017
Hangsik Shin, Byunghun Choi, Doyoon Kim and Jaegeol Cho, “Robust Sleep Quality Quantification Method for a Personal Handheld Device,” Telemedicine & e-Health, 20(6), 522-530, 2014
Yonghyeon Yun, Minki Hwang, Jae Hyung Park, Hangsik Shin, Eun Bo Shim and Hui-Nam Pak, “The Relationship among Complex Fractionated Electrograms, Wavebreak, Phase Singularity, and Local Dominant Frequency in Fibrillation Wave-Dynamics: a Modeling Comparison Study,” Journal of Korean Medical Science, 29(3), 370-377, 2014
Chungkeun Lee, Hangsik Shin, Jongchul Park and Myoungho Lee, “The Optimal Attachment Position for a Fingertip Photoplethysmographic Sensor with Low DC,” IEEE Sensor Journal, 12(5), 1253-1254, 2012
Chungkeun Lee, Hangsik Shin and Myoungho Lee, “Relations between AC-DC components and optical path length in photoplethysmography,” Journal of Biomedical Optics, 16(7), 077012-077012-4, 2011
Se Dong Min, Jin Kwon Kim, Hangsik Shin, Yong Hyeon Yun, Chungkeun Lee and Myoungho Lee, “Noncontact Respiration Rate Measurement System Using an Ultrasonic Proximity Sensor,” IEEE Sensor Journal, 10(11), 1732-1739, 2010
Hangsik Shin, Chungkeun Lee and Myoungho Lee, “Ideal Filtering Approach on DCT Domain for Biomedical Signals: Index Blocked DCT Filtering Method (IB-DCTFM),” Journal of Medical Systems, 34(4), 741-753, 2010
Hangsik Shin, Chungkeun Lee and Myoungho Lee, “Adaptive threshold method for the peak detection of photoplethysmographic waveform,” Computers in Biology and Medicine, 39(12), 1145-1152, 2009
Jinkwon Kim, Hangsik Shin, Kwangsoo Shin, Myoungho Lee, “Robust Algorithm for Arrhythmia Classification in ECG Using Extreme Learning Machine,” Biomedical Engineering Online, 8(31), 1-12, 2009
Myoungho Lee, Se Dong Min, Hangsik Shin, Byung Woo Lee and Jinkwon Kim, “The e-Health Landscape: Current Status and Future Prospects in Korea,” Telemedicine & e-Health, 15(4), 362-369, 2009 
Sung Won Yoon, Hangsik Shin, Se Dong Min and Myoungho Lee, “Adaptive motion artifacts reduction algorithm for ECG signal in textile wearable sensor,” IEICE Electronics Express, 4(10), 312-318, 2007`;

  document.getElementById("setInnerTextPara").classList.add("clicked");
  const paperArray = papers.split('\n');
  let paperList = '';
  for (let i = 0; i < paperArray.length; i++) {
    const paperInfo = paperArray[i];
    paperList += `<a href="#" onclick="openPaper(${i})" style="color: black; text-decoration: none; border: none;">${i + 1}. ${paperInfo}</a><br><br>`;
  }

  const element = document.getElementById('my_div');
  element.innerHTML = paperList;
}

function openPaper(paperIndex) {
  const paperLinks = [
    '링크1', '링크2', '링크3', '링크4', '링크5', // 논문에 대한 실제 링크 URL

  ];

  if (paperIndex >= 0 && paperIndex < paperLinks.length) {
    // 논문 링크 URL로 이동 또는 다른 동작을 수행하는 로직을 추가하세요.
    window.location.href = paperLinks[paperIndex]; // 예: 클릭 시 해당 URL로 이동
  }
}



function setTextContent() {
  resetButtons()
  const papers = `Changwon Wang, Chungkeun Lee and, Hangsik Shin, “Digital therapeutics from bench to bedside,” npj Digital Medicine, 6(38), 2023
Hangsik Shin, “A novel method for non‐invasive blood pressure estimation based on continuous pulse transit time: An observational study,” Psychophysiology, 60(2), e14173, 2023 
Hangsik Shin, “Photoplethysmogram based vascular aging assessment using the deep convolutional neural network,” Scientific Reports, 12, 11377, 2022 
Hangsik Shin, “XGBoost Regression of the Most Significant Photoplethysmogram Features for Assessing Vascular Aging,” IEEE Journal of Biomedical and Health Informatics, 26(7), 3354-3361, 2022
Hangsik Shin, “Deep Convolutional Neural Network based Signal Quality Assessment for Photoplethysmogram,” Computers in Biology and Medicine, 145, 105430, 2022 
Junyung Park, Hangsik Shin, “Vascular Aging Estimation Based on Artificial Neural Network Using Photoplethysmogram Waveform Decomposition: Retrospective Cohort Study,” JMIR Medical Informatics, 10(3), 1-17, 2022 
Oh-Seok Kwon, Jisu Lee, Je-Wook Park, So-Hyun Yang, Inseok Hwang, Hee Tae Yu, Hangsik Shin and Hui-Nam Pak, “Three-Dimensional Atrial Wall Thickness Measurement Algorithm from a Segmented Atrial Wall using a Partial Differential Equation,” IEEE ACCESS, 10, 32161-32170, 2022 
Hangsik Shin, “Deep Convolutional Neural Network-Based Hemiplegic Gait Detection Using an Inertial Sensor Located Freely in a Pocket,” Sensors, 22(5), 1920, 2022 
Junyung Park, Hyeon Seok Seok, Sang-Su Kim and Hangsik Shin, “Photoplethysmogram Analysis and Applications: An Integrative Review,” Frontiers in Physiology, 12, 1-23, 2022
Hyeon Seok Seok and Hangsik Shin, “Recommendation for Measuring Digital Volume Pulse in Mobile Application: for Healthy Normal Subject,” IEEE ACCESS, 9, 69335-69345, 2021
Danbi Gwon, Hakyung Cho and Hangsik Shin, “Feasibility of a Waistband-type Wireless Wearable Electrocardiogram Monitoring System based on a Textile Electrode,” JMIR mHealth and uHealth, 9(5), e26469, 2021
Jin Woong Kim, Hyeon Seok Seok and Hangsik Shin, “Is Ultra-Short-Term Heart Rate Variability Valid in Non-static Conditions?,” Frontiers in Physiology, 12, 596060, 2021 
Donggeun Roh and Hangsik Shin, “Recurrence Plot and Machine Learning for Signal Quality Assessment of Photoplethysmogram in Mobile Environment,” Sensors, 21(6), 2188, 2021 
Byung-Moon Choi, Hangsik Shin, Joo-Hyun Lee, Ji-Yeon Bang, Eun-Kyung Lee and Gyujeong Noh, “Performance of the Surgical Pleth Index and Analgesia Nociception Index in Healthy Volunteers and Parturients,” Frontiers in Physiology, 12, 554026, 2021 
Byung-Moon Choi, Ji Yeon Yim, Hangsik Shin, Gyujeong Noh, “Novel Analgesic Index for Postoperative Pain Assessment Based on a Photoplethysmographic Spectrogram and Convolutional Neural Network: Observational Study,” Journal of Medical Internet Research, 23(2), e23920, 2021
Hangsik Shin and Ahyoung Choi, “Calculation and Validation of Continuous Pulse Transit Time Based on Normalized Pulse Wave Velocity,” IEEE ACCESS, 8, 221632-221639, 2020 
Junyung Park, Sangki Park, Seongcheol Ahn, Yujang Cho, Jong-Jin Park and Hangsik Shin, “Wearable Strain Sensor Using Conductive Yarn Sewed on Clothing for Human Respiratory Monitoring,” IEEE Sensors Journal, 20(21), 12628-12636, 2020
Seongcheol Ahn, Yujang Cho, Sangki Park, Junseo Kim, Jingzhe Sun, Dahye Ahn, Miyeon Lee, Daeeun Kim, Taeyun Kim, Hangsik Shin and Jong-Jin Park, “Wearable multimode sensors with amplified piezoelectricity due to the multi local strain using 3D textile structure for detecting human body signals,” Nano Energy, 74, 104932, 2020
Ahyoung Choi, Sangwoo Noh and Hangsik Shin, “Internet-Based Unobtrusive Tele-Monitoring System for Sleep and Respiration,” IEEE ACCESS, 8, 76700-76707, 2020 
Chanki Park, Min-Ho Yang, BoHyun Choi, Bokyung Jeon, Yong-Hun Lee, Hangsik Shin, Boreom Lee, Byung-Moon Choi and Gyu-Jeong Noh, “Performance of the nasal photoplethysmographic index as an analgesic index during surgery under general anaesthesia,” Scientific Reports, 10, 7130, 2020 
Donggeun Roh, Sangjin Han, Junyung Park and Hangsik Shin, “Development of a Multi-Array Pressure Sensor Module for Radial Artery Pulse Wave Measurement,” Sensors, 20(1), 33, 2020 
Sangjin Han, Donggeun Roh and Hangsik Shin, “Design of Multi-Wavelength Optical Sensor Module for Depth-Dependent Photoplethysmography,” Sensors, 19(24), 5441, 2019
Hyeon Seok Seok, Byung-Moon Choi, Gyu-Jeong Noh and Hangsik Shin, “Postoperative Pain Assessment Model Based on Pulse Contour Characteristics Analysis,” IEEE Journal of Biomedical and Health Informatics, 23(6), 2317-2324, 2019 
Changwon Wang, Young Kim, Hangsik Shin and Se Dong Min, “Preliminary Clinical Application of Textile Insole Sensor for Hemiparetic Gait Pattern Analysis,” Sensors, 19(18), 3950, 2019
Jaepil Kim, Jeong-Whan Lee and Hangsik Shin, “Pre-processing of Photoplethysmographic Waveform for Amplitude Regularization,” Journal of Electrical Engineering & Technology, 14(4), 1741-1748, 2019 
Sooji Park, Hyong-Ho Cho, Hyung Chae Yang, Jin-Sang Yoon and Hangsik Shin, “Force-Sensing-Based Unobtrusive System for Awakening and Respiration Rate Analysis during Sleep,” IEEE Sensors Journal, 19(5), 1917-1924, 2019
Wookjin Lee, Jaiyoung Ryu, Hangsik Shin, Hong Sun Ryou and Seong Wook Cho, “Numerical study to evaluate the effect of a surface-based sensor on arterial tonometry,” Computer Methods in Biomechanics and Biomedical Engineering, 27(6), 556-572, 2018 
Ahyoung Choi and Hangsik Shin, “Longitudinal healthcare data management platform of healthcare IoT device for personalized services,” Journal of Universal Computer Science, 24(9), 1153-1169, 2018
Byung-Moon Choi, Chanki Park, Yong-Hun Lee, Hangsik Shin, Soo-Han Lee, Seongwook Jeong, Gyu-Jeong Noh and Boreom Lee, “Development of a new analgesic index using nasal photoplethysmography,” Anaesthesia, 73(9), 1123-1130, 2018 
Yoon La Yang, Hyeon Seok Seok, Gyu-Jeong Noh, Byung-Moon Choi and Hangsik Shin, “Postoperative pain assessment index based on Photoplethysmography,” Frontiers in Physiology, 9, 1199, 2018 
Ahyoung Choi and Hangsik Shin, “Quantitative analysis of the effect of an ectopic beat on heart rate variability in the resting condition,” Frontiers in physiology, 9, 922, 2018
Jun Seok Lee, Sooji Park and Hangsik Shin, “Detection of hemiplegic walking using a wearable inertia sensing device,” Sensors, 18(6), 1736, 2018 
Ahyoung Choi and Hangsik Shin, “Reply to Comment on “Photoplethysmography sampling frequency: pilot assessment of how low can we go to analyze pulse rate variability with reliability?,” Physiological Measurement, 38(12), 2252-2256, 2017 
Sooji Park and Hangsik Shin, “Feasibility Study for Monitoring Unconstrained Respiration based on Multi-way Approach Using an Acceleration and Force Sensing Module,” IEEE Sensors Journal, 17(11), 3482-3489, 2017
Ahyoung Choi and Hangsik Shin, “Photoplethysmography sampling frequency: pilot assessment of how low can we go to analyze pulse rate variability with reliability?,” Physiological Measurement, 38(3), 586-600, 2017
Hangsik Shin, Byunghun Choi, Doyoon Kim and Jaegeol Cho, “Robust Sleep Quality Quantification Method for a Personal Handheld Device,” Telemedicine & e-Health, 20(6), 522-530, 2014
Yonghyeon Yun, Minki Hwang, Jae Hyung Park, Hangsik Shin, Eun Bo Shim and Hui-Nam Pak, “The Relationship among Complex Fractionated Electrograms, Wavebreak, Phase Singularity, and Local Dominant Frequency in Fibrillation Wave-Dynamics: a Modeling Comparison Study,” Journal of Korean Medical Science, 29(3), 370-377, 2014
Chungkeun Lee, Hangsik Shin, Jongchul Park and Myoungho Lee, “The Optimal Attachment Position for a Fingertip Photoplethysmographic Sensor with Low DC,” IEEE Sensor Journal, 12(5), 1253-1254, 2012
Chungkeun Lee, Hangsik Shin and Myoungho Lee, “Relations between AC-DC components and optical path length in photoplethysmography,” Journal of Biomedical Optics, 16(7), 077012-077012-4, 2011
Se Dong Min, Jin Kwon Kim, Hangsik Shin, Yong Hyeon Yun, Chungkeun Lee and Myoungho Lee, “Noncontact Respiration Rate Measurement System Using an Ultrasonic Proximity Sensor,” IEEE Sensor Journal, 10(11), 1732-1739, 2010
Hangsik Shin, Chungkeun Lee and Myoungho Lee, “Ideal Filtering Approach on DCT Domain for Biomedical Signals: Index Blocked DCT Filtering Method (IB-DCTFM),” Journal of Medical Systems, 34(4), 741-753, 2010
Hangsik Shin, Chungkeun Lee and Myoungho Lee, “Adaptive threshold method for the peak detection of photoplethysmographic waveform,” Computers in Biology and Medicine, 39(12), 1145-1152, 2009
Jinkwon Kim, Hangsik Shin, Kwangsoo Shin, Myoungho Lee, “Robust Algorithm for Arrhythmia Classification in ECG Using Extreme Learning Machine,” Biomedical Engineering Online, 8(31), 1-12, 2009
Myoungho Lee, Se Dong Min, Hangsik Shin, Byung Woo Lee and Jinkwon Kim, “The e-Health Landscape: Current Status and Future Prospects in Korea,” Telemedicine & e-Health, 15(4), 362-369, 2009 
Sung Won Yoon, Hangsik Shin, Se Dong Min and Myoungho Lee, “Adaptive motion artifacts reduction algorithm for ECG signal in textile wearable sensor,” IEICE Electronics Express, 4(10), 312-318, 2007`;

  document.getElementById("setTextContentPara").classList.add("clicked");
  const paperArray = papers.split('\n');
  let paperList = '';
  for (let i = 0; i < paperArray.length; i++) {
    const paperInfo = paperArray[i];
    paperList += `<a href="#" onclick="openPaper(${i})" style="color: black; text-decoration: none; border: none;">${i + 1}. ${paperInfo}</a><br><br>`;
  }

  const element = document.getElementById('my_div');
  element.innerHTML = paperList;
}

function openPaper(paperIndex) {
  const paperLinks = [
    '링크1', '링크2', '링크3', '링크4', '링크5', // 논문에 대한 실제 링크 URL

  ];

  if (paperIndex >= 0 && paperIndex < paperLinks.length) {
    // 논문 링크 URL로 이동 또는 다른 동작을 수행하는 로직을 추가하세요.
    window.location.href = paperLinks[paperIndex]; // 예: 클릭 시 해당 URL로 이동
  }
}


// 모든 버튼의 스타일 초기화
function resetButtons() {
  var buttons = document.querySelectorAll(".small-button");
  buttons.forEach(function (button) {
    button.classList.remove("clicked");
  });
}

// 버튼 클릭 이벤트 핸들러 설정
document.getElementById("journalSCIPara").addEventListener("click", JournalSCI);
document.getElementById("setInnerTextPara").addEventListener("click", setInnerText);
document.getElementById("setTextContentPara").addEventListener("click", setTextContent);




// CSS 스타일을 추가하여 간격을 조절
const style = document.createElement('style');
style.innerHTML = `
  #my_div {
    line-height: 1.2;
  }
  #my_div br {
    line-height: 0.8;
  }
`;
document.head.appendChild(style);