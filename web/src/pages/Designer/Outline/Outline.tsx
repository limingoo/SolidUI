import React from "react";
import { Tooltip } from "antd";
import "./outline.less";
import { eventbus } from "@/utils";

function Outline() {
	React.useEffect(() => {
		eventbus.on("onModelLoad", (evt) => {
			let model = evt.model;
			console.log(model);
		});

		return () => {
			eventbus.off("onModelLoad");
		};
	}, []);

	return (
		<div className="aside-outline">
			<div className="heading">
				<span
					style={{
						position: "relative",
						height: "38px",
						width: "100%",
						fontSize: "14px",
						// color: "#fff",
						lineHeight: "38px",
					}}
				>
					View List
				</span>
			</div>
			<div className="components">
				<div
					style={{
						position: "relative",
						width: "100%",
						height: "100%",
						overflow: "hidden",
					}}
				>
					<div
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							bottom: 0,
							right: 0,
							overflow: "scroll",
							marginRight: "-4px",
							marginBottom: "-4px",
						}}
					>
						<ul className="charts">
							<div className="charts-container">
								<li className="chartview">
									<span className="eblock"></span>
									<i
										className="bi-font bi-chart-column"
										style={{
											position: "relative",
											fontSize: "16px",
											color: "#3dd8ff",
										}}
									></i>
									<span className="text">Basic Bar Chart</span>
									<div className="act act-eye">
										<Tooltip title="hide">
											<i className="bi-font bi-eye" />
										</Tooltip>
									</div>
									<div className="act act-lock">
										<Tooltip title="lock">
											<i className="bi-font bi-lock" />
										</Tooltip>
									</div>
								</li>

								<li className="chartview selected">
									<span className="eblock"></span>
									<i
										className="bi-font bi-chart-column"
										style={{
											position: "relative",
											fontSize: "16px",
											color: "#3dd8ff",
										}}
									></i>
									<span className="text">Basic Bar Chart</span>
									<div className="act act-eye">
										<Tooltip title="hide">
											<i className="bi-font bi-eye" />
										</Tooltip>
									</div>
									<div className="act act-lock">
										<Tooltip title="lock">
											<i className="bi-font bi-lock" />
										</Tooltip>
									</div>
								</li>
							</div>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Outline;