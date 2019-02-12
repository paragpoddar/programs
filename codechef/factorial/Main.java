import java.util.*;

class Main {

    public static void main(String args[]) throws java.lang.Exception {
        try {
            Scanner sc = new Scanner(System.in);
            int noOfTimes = sc.nextInt();
            for (int i = 0; i < noOfTimes; i++) {
                int num = sc.nextInt();
                int noOfZeroes = 0;
                noOfZeroes = num / 5;
                if (noOfZeroes >= 5) {
                    noOfZeroes = noOfZeroes + noOfZeroes / 5;
                }
                System.out.println(noOfZeroes);
            }
        } catch (Exception exception) {
            System.out.println(exception);
        }

    }

}