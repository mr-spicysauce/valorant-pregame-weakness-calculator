import { useRef, useEffect, useState } from "react";

import Agent from "@/components/agent"

var selections = 0

export default function Home() {

	//this set of const is for keeping track of who is selected
	const [brimstone_selected,set_brimstone_selection] = useState(false)
	const [viper_selected,set_viper_selection] = useState(false)
	const [omen_selected,set_omen_selection] = useState(false)
	const [kj_selected,set_kj_selection] = useState(false)
	const [cypher_selected,set_cypher_selection] = useState(false)
	const [sova_selected,set_sova_selection] = useState(false)
	const [sage_selected,set_sage_selection] = useState(false)
	const [phoenix_selected,set_phoenix_selection] = useState(false)
	const [jett_selected,set_jett_selection] = useState(false)
	const [rayna_selected,set_rayna_selection] = useState(false)
	const [raze_selected,set_raze_selection] = useState(false)
	const [breach_selected,set_breach_selection] = useState(false)
	const [skye_selected,set_skye_selection] = useState(false)
	const [youru_selected,set_youru_selection] = useState(false)
	const [astra_selected,set_astra_selection] = useState(false)
	const [kayo_selected,set_kayo_selection] = useState(false)
	const [chamber_selected,set_chamber_selection] = useState(false)
	const [neon_selected,set_neon_selection] = useState(false)
	const [fade_selected,set_fade_selection] = useState(false)
	const [harber_selected,set_haber_selection] = useState(false)
	const [gecko_selected,set_gecko_selection] = useState(false)

	function update_selection(remove) {
	
		if (selections < 5 && !remove){
			selections ++
		}
		else if (selections > 0 && remove) {
			selections --
		}
	}

  return (
    <>
	<header id="header">
		<h1 id="header-txt">Pregame weakness calculator</h1>
	</header>
	<header>
		<h1 id="agent-title"> Agents </h1>
	</header>
	<div id="hero1">
		<Agent set_selection={set_brimstone_selection} selected={brimstone_selected} update_selection={update_selection} selections={selections} AgentName="Brimstone" />
		<Agent set_selection={set_viper_selection} selected={viper_selected} update_selection={update_selection} selections={selections} AgentName="Viper" />
		<Agent set_selection={set_omen_selection} selected={omen_selected} update_selection={update_selection} selections={selections} AgentName="Omen" />
		<Agent set_selection={set_kj_selection} selected={kj_selected} update_selection={update_selection} selections={selections} AgentName="KJ" />
		<Agent set_selection={set_cypher_selection} selected={cypher_selected} update_selection={update_selection} selections={selections} AgentName="Cypher" />
		<Agent set_selection={set_sova_selection} selected={sova_selected} update_selection={update_selection} selections={selections} AgentName="Sova" />
		<Agent set_selection={set_sage_selection} selected={sage_selected} update_selection={update_selection} selections={selections} AgentName="Sage" />
		<Agent set_selection={set_phoenix_selection} selected={phoenix_selected} update_selection={update_selection} selections={selections} AgentName="Phoenix" />
		<Agent set_selection={set_jett_selection} selected={jett_selected} update_selection={update_selection} selections={selections} AgentName="Jett" />
		<Agent set_selection={set_rayna_selection} selected={rayna_selected} update_selection={update_selection} selections={selections} AgentName="Rayna" />
		<Agent set_selection={set_raze_selection} selected={raze_selected} update_selection={update_selection} selections={selections} AgentName="Raze" />
		<Agent set_selection={set_breach_selection} selected={breach_selected} update_selection={update_selection} selections={selections} AgentName="Breach" />
		<Agent set_selection={set_skye_selection} selected={skye_selected} update_selection={update_selection} selections={selections} AgentName="Skye" />
		<Agent set_selection={set_youru_selection} selected={youru_selected} update_selection={update_selection} selections={selections} AgentName="Youru" />
		<Agent set_selection={set_astra_selection} selected={astra_selected} update_selection={update_selection} selections={selections} AgentName="Astra" />
		<Agent set_selection={set_kayo_selection} selected={kayo_selected} update_selection={update_selection} selections={selections} AgentName="KAYO" />
		<Agent set_selection={set_chamber_selection} selected={chamber_selected} update_selection={update_selection} selections={selections} AgentName="Chamber" />
		<Agent set_selection={set_neon_selection} selected={neon_selected} update_selection={update_selection} selections={selections} AgentName="Neon" />
		<Agent set_selection={set_fade_selection} selected={fade_selected} update_selection={update_selection} selections={selections} AgentName="Fade" />
		<Agent set_selection={set_haber_selection} selected={harber_selected} update_selection={update_selection} selections={selections} AgentName="Harber" />
		<Agent set_selection={set_gecko_selection} selected={gecko_selected} update_selection={update_selection} selections={selections} AgentName="Gecko" />
		
	</div>

	<div id="hero2">
		<div id="left">
			<header className="content-header-container"> <h1 className="content-header-txt">Strengths</h1></header>
			<div id="left-content">
				<div id="left-content-lists">
					<img className="picked-agents" src="Brimstone.png"></img>
					<img className="picked-agents" src="Omen.png"></img>
					<img className="picked-agents" src="Rayna.png"></img>
					<img className="picked-agents" src="Skye.png"></img>
					<img className="picked-agents" src="KAYO.png"></img>
				</div>
				<div id="left-content-text-lists">
					<text className="content-text">Smokes X2</text>
					<text className="content-text">Skye dog recon</text>
					<text className="content-text">Knife recon</text>
					<text className="content-text">Pop flash X2</text>
					<text className="content-text">Molly X2</text>
				</div>
			</div>
		</div>

		<div id="middle">
			<header className="content-header-container"> <h1 className="content-header-txt">Weaknesses</h1></header>
			<div id="middle-content">
				<div id="middle-contnet-list">
					<text className="content-text">No stun</text>
					<text className="content-text">No trips</text>
					<text className="content-text">No wall</text>
					<text className="content-text">No sentinel</text>
					<text className="content-text">No reveal ability's</text>
					<text className="content-text">No movement ability's</text>
				</div>
			</div>
		</div>

		<div id="right">
			<header className="content-header-container"> <h1 className="content-header-txt">Things to consider</h1></header>
			<div id="right-content">
				<div id="right-content-list">
					<text className="content-text">No trip means you can flank more often</text>
					<text className="content-text">No trip means that one person may have to hold flank, one less person for post plant</text>
					<text className="content-text">No movement ability's means that pushing sites quickly is hard, much easier to stop</text>
					<text className="content-text">No stun ability's  means that its harder to clear some areas, ratting could be effective</text>
					<text className="content-text">More than one controller means that the phantom is more effective for spamming</text>
					<text className="content-text">More than one molly could mean someone has post plant line ups</text>
					<text className="content-text">Pop flash's mean they can flash out of smokes better </text>
					<text className="content-text">Recon ability's allow them to clear close corners and get onto site </text>
				</div>
			</div>
		</div>

	</div>

    </>
  );
}
