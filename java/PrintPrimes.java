import java.util.*;

public class PrintPrimes {

    public static void main(String args[]) {
        System.out.println("Hello");
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        String primes = "";
        int tempNum = 0;
        for (int i = 1; i <= num; i++) {
            int count = 0;
            for (tempNum = i; tempNum >= 1; tempNum--) {
                if (i % tempNum == 0) {
                    count = count + 1;
                }
            }
            if (count == 2) {
                primes = primes + i + " ";
            }
        }
        System.out.println(primes);
    }

}