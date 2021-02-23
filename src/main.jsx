import React from "react"
import ReactDOM from "react-dom"
import DockLayout from "rc-dock"

const box = {
	dockbox: {
		mode: "horizontal",
		children: [
			{
				tabs: [
					{
						id: "tab1",
						title: "tab1",
						content: <div>Hello World!</div>,
					},
				],
			},
		],
	},
}

ReactDOM.render(
	<DockLayout defaultLayout={box} />,
	document.querySelector("#root")
)
