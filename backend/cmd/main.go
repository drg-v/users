package main

import "users/app"

func main() {
	if err := app.Run(); err != nil {
		panic(err)
	}
}
