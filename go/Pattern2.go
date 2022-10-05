// https://practice.geeksforgeeks.org/problems/right-triangle/1?utm_source=youtube&utm_medium=collab_striver_ytdescription&utm_campaign=pattern_2

package main

import "fmt"

func main() {
	n := 5
	for i := 1; i <= n; i++ {
		for j := 1; j <= i; j++ {
			fmt.Printf("* ")
		}
		fmt.Println()
	}
}
