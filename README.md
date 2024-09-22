# Hygieia.Eye
Covid - 19 Solution
The covid-19 pandemic has a global impact as it directly influences everything we do as humans in our social lives. There are high vulnerability enclosures where the virus can spread easily and rapidly. The supermarket chains all over the world is one such high risk indoor environment.  <a href="https://www.researchgate.net/publication/372676636_The_Hygieia_Eye_Covid19_Safety_System">In this paper</a>, the Hygeia Eye Supermarket Safety System proposes a model to control the spread of the corona virus within the supermarket premises. It employs a series of sensors to detect customer body temperature and their facemask. The maximum crowd limit also maintains with the data received from sensors at the entrance and exit doors. On premises social distancing also monitors through a video streaming obtained using the raspberry PI camera attached to a social distancing module. This overall model automatically notifies the supermarket management when any undesirable data received which may contribute to the spread of the virus. Through a web dashboard both current and summary data and reports can be generated for the benefit of decision-making process.


Face mask detection approach:
Steps : check this out....
1.	Distance from camera method is used to detect whether a person is approaching the camera or going away. 
2.	Decrease in distance triggered face detection. If eye line is detected face detection can be applied
3.	If eyes are detected but not the nose and the mouth, then it is considered as a face mask is detected (facial part detection) 
Viola Jones Algorithm is used here

