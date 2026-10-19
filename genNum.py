#ok so this script isn't used directly in the website but it is used to create a database of cards and lable their difficulty
#see cards.txt and the solutions folder for all the possible cards/solutions for 24!
#oh and by the way cards.txt includes the card number and the number of solutions as the second line
#i spent way too long on this

import random
import os
class genNum:
    sols=[]
    @staticmethod
    def check(nums, ans):
        a=0
        if not (len(ans) == 4):
            for i in range(len(nums)):
                if (genNum.check(nums[0:i] + nums[i+1:], str(ans) + str(nums[i]))):
                    a+=1
            if (a>=1):
                return True
            else:
                return False
        b=float(ans[0:1])
        return genNum.recheck(b,ans[1:],str(int(b)))
    @staticmethod
    def recheck(num, numLeft, sol: str):
        if not(numLeft == ''):
            if(0.001 < float(numLeft) < -0.001):
                return False
            if(num<-0.001):
                return False
            oneNum=float(numLeft[0:1])
            whatsLeft=numLeft[1:]
            temp1=genNum.recheck(num+oneNum, whatsLeft, str(sol)+"+"+str(int(oneNum+0.001)))
            temp2=genNum.recheck(num-oneNum, whatsLeft, str(sol)+"-"+str(int(oneNum+0.001)))
            temp3=genNum.recheck(num*oneNum, whatsLeft, str(sol)+"*"+str(int(oneNum+0.001)))
            temp4=genNum.recheck(num/oneNum, whatsLeft, str(sol)+"/"+str(int(oneNum+0.001)))
            return (temp1 or temp2 or temp3 or temp4)
        if (abs(num-24)<0.001):
            #print(sol)
            genNum.sols.append(sol)
            return True
        else:
            return False


    @staticmethod
    def random():
        a=int(random.random()*9+1)
        return a

for i in range(1000,9999):
    genNum.sols=[]
    if "0" in str(i):
        continue
    card = str(i)
    if (genNum.check(card, "")):
        with open("cards.txt", "a") as f:
            f.write(card + "\n" + str(len(genNum.sols)) + "\n")
        folder="solutions"
        file=str(card) + ".txt"
        path=os.path.join(folder, file)
        if not os.path.exists(folder):
            os.makedirs("solutions")
        with open(path, "a") as f:
            for sol in genNum.sols:
                f.write(sol + "\n")
        #print("Card:" + card)