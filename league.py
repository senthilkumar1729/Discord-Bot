
api_key='RGAPI-85d3816f-47b6-469a-aeaf-1c934b57d357'
region='eune'

import sys
import cassiopeia as cs



cs.set_riot_api_key(api_key)

cs.set_default_region(region)

summoner =  cs.get_summoner(name= sys.argv[1])

champion=sys.argv[2]
if champion =="Lee":
    champion="Lee Sin"
if champion =="Xin":
    champion="Xin Zhao"
print("\n MASTERY POINTS : ",cs.get_champion_mastery(summoner,champion).points)
