#if defined(ESP32)

#include <FirebaseESP32.h>
#elif defined(ESP8266)
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>
#endif


#define API_KEY "AIzaSyBGdOIdF5jjvKUWZ5Lvu7rGOaLPgzhMCEo"

/* 3. Define the RTDB URL */
#define DATABASE_URL "https://smart-38cea-default-rtdb.firebaseio.com/"  //<databaseName>.firebaseio.com or <databaseName>.<region>.firebasedatabase.app

/* 4. Define the user Email and password that alreadey registerd or added in your project */
#define USER_EMAIL "hadil@gmail.com"
#define USER_PASSWORD "1234567"
String dataDBB ;//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"



#include <ESP32Servo.h>
#include <WiFi.h> 
#include <Wire.h> 
Servo myservo; 



const char* ssid = "Redmi"; //choose your wireless ssid
const char* password ="559063677"; //put your wireless password here.
void setup() {
  // Initialiser les broches de contrôle du moteur en sortie
  Serial.begin(115200);
  WiFi.begin(ssid,password);
 

  Serial.println("Connexion en cours");
  while(WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("");
  Serial.print("Connecté au réseau WiFi avec l'adresse IP : ");
  Serial.println(WiFi.localIP());
  myservo.attach(13);    
  myservo.write(70);
  config.api_key = API_KEY;

  auth.user.email = USER_EMAIL;
  auth.user.password = USER_PASSWORD;

  config.database_url = DATABASE_URL;

  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
}

void loop() {

Firebase.RTDB.getString(&fbdo,"Led1Status",&dataDBB);//ta5oou min base

if (dataDBB == "ON"){
  
   myservo.write(90);              
      
   }if(dataDBB == "OFF"){
     myservo.write(0);
   }

}










