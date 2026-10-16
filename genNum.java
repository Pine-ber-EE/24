//this is the program i wrote to generate random numbers and check if they can make 24. it uses recursion which is what i am learning in school right now! i wrtoe this in java to test out the concept but i decided to convert this draft/idea into a more clean python script that can be used for the website to practice my python skills :) (see genNum.py))

public class MyProgram
{
    public static void main(String[] args)
    {
        String card=random()+""+random()+""+random()+""+random();
        System.out.println("start: "+card);
        while(!check(card,""))
        {
            card=random()+""+random()+""+random()+""+random();
            System.out.println("new card: "+card);
        }
        System.out.println("Card: "+card);
        
    }
    
    public static boolean check(String nums, String ans)
    {
        //System.out.println("method check stars "+"nums:"+nums+" ans:"+ans+"!!");
        int a = 0;
        if(!(ans.length()==4))
        {
            for(int i=0;i<nums.length();i++)
            {
                //System.out.println("method check stars "+nums+" "+ans+"!!  "+nums.charAt(i));
                if(check(nums.substring(0,i)+nums.substring(i+1), ans+nums.charAt(i)))
                    a++;
            }
            
            if(a>=1)
                return true;
            else
            {
                //System.out.println("false: "+a);
                return false;
            }
        }
        //System.out.println(ans.length()+"helllooo"+ans);
        double b = Double.parseDouble(ans.substring(0,1));
        return recheck(b,ans.substring(1),(int)b+"",4);
    }
    
    public static boolean recheck(double num, String numLeft, String sol, int count)
    {
        if(!(numLeft.equals(""))||count==0)
        {
            if(0.001>(num%0)&&(num%0)>-0.001)
                return false;
            if(num<-0.001)
                return false;
            //System.out.println("method recheck stars "+"num:"+num+" numLeft:"+numLeft+" sol:"+sol+"!!");
            double oneNum = Double.parseDouble(numLeft.substring(0,1));
            String whatsLeft = numLeft.substring(1);
            boolean temp1 = recheck(num+oneNum, whatsLeft, sol+("+"+(int)oneNum), count-1);
            boolean temp2 = recheck(num-oneNum, whatsLeft, sol+("-"+(int)oneNum), count-1);
            boolean temp3 = recheck(num*oneNum, whatsLeft, sol+("*"+(int)oneNum), count-1);
            boolean temp4 = recheck(num/oneNum, whatsLeft, sol+("/"+(int)oneNum), count-1);
            return temp1||temp2||temp3||temp4;
        }
        if(24.001>num&&num>23.999)
        {
            System.out.println("omg this works?? "+sol);
            return true;
        }
        else
        {
            return false;
        }
    }

    
    public static int random()
    {
        int a = (int)(Math.random()*9)+1;
        //System.out.println(a);
        return a;
    }
}