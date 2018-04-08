import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }

  AccordionData = [{
	"Title":"News A",
	"Content":"According to the FIR, Ramji and his partner Rajesh Pasi were intercepted and surrounded by a special police team and forces from two police stations who waved at the duo to surrender. However, the two accused fired at the police who shot back. While constable Vinod Saroj survived a bullet injury to the left side of his stomach, Ramji was hit by bullets and later died in hospital. A .32 bore county-made pistol was shown recovered from him.According to the police, Rajesh Pasi managed to escape from the scene on a stolen motorbike after taking cover amid a crowd of schoolchildren. Mr. Saroj contests the police account, asking how Rakesh Pasi managed to escape despite being surrounded while his brother was shot dead. As proof that his brother was assaulted before being shot, he cites the post-mortem report that said Ramji’s ribs were fractured . He alleges that the police were concocting similar stories to explain the illegal deaths of suspects."
},
{
	"Title":"News B",
	"Content":"According to the FIR, Ramji and his partner Rajesh Pasi were intercepted and surrounded by a special police team and forces from two police stations who waved at the duo to surrender. However, the two accused fired at the police who shot back. While constable Vinod Saroj survived a bullet injury to the left side of his stomach, Ramji was hit by bullets and later died in hospital. A .32 bore county-made pistol was shown recovered from him. According to the police, Rajesh Pasi managed to escape from the scene on a stolen motorbike after taking cover amid a crowd of schoolchildren. Mr. Saroj contests the police account, asking how Rakesh Pasi managed to escape despite being surrounded while his brother was shot dead. As proof that his brother was assaulted before being shot, he cites the post-mortem report that said Ramji’s ribs were fractured . He alleges that the police were concocting similar stories to explain the illegal deaths of suspects."
},
{
	"Title":"News C",
	"Content":"According to the FIR, Ramji and his partner Rajesh Pasi were intercepted and surrounded by a special police team and forces from two police stations who waved at the duo to surrender. However, the two accused fired at the police who shot back. While constable Vinod Saroj survived a bullet injury to the left side of his stomach, Ramji was hit by bullets and later died in hospital. A .32 bore county-made pistol was shown recovered from him. According to the police, Rajesh Pasi managed to escape from the scene on a stolen motorbike after taking cover amid a crowd of schoolchildren. Mr. Saroj contests the police account, asking how Rakesh Pasi managed to escape despite being surrounded while his brother was shot dead. As proof that his brother was assaulted before being shot, he cites the post-mortem report that said Ramji’s ribs were fractured . He alleges that the police were concocting similar stories to explain the illegal deaths of suspects."
},
{
	"Title":"News D",
	"Content":"According to the FIR, Ramji and his partner Rajesh Pasi were intercepted and surrounded by a special police team and forces from two police stations who waved at the duo to surrender. However, the two accused fired at the police who shot back. While constable Vinod Saroj survived a bullet injury to the left side of his stomach, Ramji was hit by bullets and later died in hospital. A .32 bore county-made pistol was shown recovered from him. According to the police, Rajesh Pasi managed to escape from the scene on a stolen motorbike after taking cover amid a crowd of schoolchildren. Mr. Saroj contests the police account, asking how Rakesh Pasi managed to escape despite being surrounded while his brother was shot dead. As proof that his brother was assaulted before being shot, he cites the post-mortem report that said Ramji’s ribs were fractured . He alleges that the police were concocting similar stories to explain the illegal deaths of suspects."
}];

  ngOnInit() {

  }

  ToggleCollpase(){
  	
  }

}
