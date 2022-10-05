// https://practice.geeksforgeeks.org/problems/triangle-pattern/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=pattern_5

package main

import "fmt"

func main() {
	n := 5
	for i := n; i >= 1; i-- {
		for j := i; j >= 1; j-- {
			fmt.Printf("* ")
		}
		fmt.Println()
	}
}
