// https://practice.geeksforgeeks.org/problems/square-pattern/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=pattern_1

package main

import "fmt"

func printSquarePattern(n int) {
	// code here
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			fmt.Print("* ")
		}
		fmt.Println()

	}

}

func main() {
	fmt.Println("hello")
	printSquarePattern(5)
}
