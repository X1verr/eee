Webcam.set({
    width: 350,
    height: 300,
    imagine_format: 'png',
    png_quality:90
});

camera = document.getElementById("camera");


Webcam.attach( '#camera' )

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 versio;', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/c4Gi-ZacD/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded')
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction is" + prediction_1;
    speak_data_2 = "The Scecond Prediction is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(spead_data_1 + speak_data_2);
    sytnh.speak(utterThis);
}

function check()
{
    img=document.getElementById('captured image')
    classifier.classify(img, gotResults)
}

function gotResults(error, results) {
    if (error) {
        console.error(error)
    } else {
        console.log(results);
        document.getElementById("results_emotion_name").innerHTML = results[0].label;
        document.getElementById("results_emotion_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;
        speak();
        if(results[0].label == "HighFive") {
            document.getElementById("update_emoji").innerHTML = "&#128400;"

            }if(results[0].label == "ThumpsUp") {
                document.getElementById("update_emoji").innerHTML = "&#128077;"
            } 
             if(results[0].label == "ThumpsDown") {
                 document.getElementById("update_emoji").innerHTML = "&#128078;"

            
        } 
        if(results[1].label == "HighFive") {
            document.getElementById("update_emoji2").innerHTML = "&#128400;"

            }if(results[1].label == "ThumpsUp") {
                document.getElementById("update_emoji2").innerHTML = "&#128077;"
            } 
             if(results[1].label == "ThumpsDown") {
                 document.getElementById("update_emoji2").innerHTML = "&#128078;"

             }
            }
        }
        
    
