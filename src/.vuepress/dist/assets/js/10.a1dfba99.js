(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{306:function(e,t,s){e.exports=s.p+"assets/img/cisco_packet_tracer_design.373e0a51.png"},307:function(e,t,s){e.exports=s.p+"assets/img/ScreenShot_OPNSense.f75e33e8.png"},336:function(e,t,s){"use strict";s.r(t);var r=s(10),n=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"contributor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#contributor"}},[e._v("#")]),e._v(" Contributor")]),e._v(" "),t("p",[e._v("Nazmul Islam &\nTanvir Ahmed")]),e._v(" "),t("h2",{attrs:{id:"inneed-office-network-infrastructure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#inneed-office-network-infrastructure"}},[e._v("#")]),e._v(" InNeed Office Network Infrastructure")]),e._v(" "),t("p",[e._v("We designed InNeed office network through cisco packet tracer")]),e._v(" "),t("p",[e._v("Fig:01 (InNeed Office Network Design) Tools used (Cisco Packet Tracer 8.2)\n"),t("img",{attrs:{src:s(306),alt:"InNeed Office Network Design"}})]),e._v(" "),t("h2",{attrs:{id:"hardware-lists"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardware-lists"}},[e._v("#")]),e._v(" Hardware Lists:")]),e._v(" "),t("ol",[t("li",[e._v("Router (Custom Made) cum Firewall Device (Access IP: 192.168.1.1)")]),e._v(" "),t("li",[e._v("TP-Link 18 port Managed Switch (Access IP: 192.168.1.2)")]),e._v(" "),t("li",[e._v("Netgear Access Point directly connected to the Switch (Installed on 9th**\n**Floor) (Access IP: 192.168.1.3)")]),e._v(" "),t("li",[e._v("TP-Link Access Point directly connected to the Switch (Installed on 10th**\n**Floor) (Access IP: 192.168.1.4)")]),e._v(" "),t("li",[e._v("Some IP Cameras directly connected to TP-Link Switch through cable (Access IP: 192.168.1.20 - 192.168.1.24)")]),e._v(" "),t("li",[e._v("Some Cat5e (Ethernet) Cables.**")])]),e._v(" "),t("h2",{attrs:{id:"software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#software"}},[e._v("#")]),e._v(" Software:")]),e._v(" "),t("ol",[t("li",[e._v("OPNsense for Router cum Firewall:")])]),e._v(" "),t("h2",{attrs:{id:"step-01-internet-connection-from-isp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-01-internet-connection-from-isp"}},[e._v("#")]),e._v(" Step 01: (Internet Connection from ISP)")]),e._v(" "),t("p",[e._v("We have 2 internet connections from 2 different ISP (Internet Service Provider).")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("ISP 01 Details:\nCCN (Chomok Cable Network) - Our IP Address: (10.253.31.251)\nPackage:\n40 Mbps (Offpeak 2am - 8pm)\n24 Mbps (Offpeak 8pm - 1:59am)\n(Shared Bandwith)")])]),e._v(" "),t("li",[t("p",[e._v("ISP 02 Details:\nOrbit Internet IP (182.48.92.42)\nPackage:\n24 Mbps (Offpeak 2am - 8pm)\n10 Mbps (Offpeak 8pm - 1:59am)\n(Shared Bandwith)")])])]),e._v(" "),t("h2",{attrs:{id:"step-02-core-layer-router"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-02-core-layer-router"}},[e._v("#")]),e._v(" Step 02: (Core Layer - Router):")]),e._v(" "),t("p",[e._v("From both ISP’s fiberline’s Onu we connected to our Router cum WLC through ethernet\nstraight cable.")]),e._v(" "),t("p",[e._v("To manage the network configuration this device has the OPNsense OS.\nWe need towrite this ip address 192.168.1.1 to our browser and give credentials to\nenter to the admin panel while connected to the InNeed.Cloud_Admin (SSID).\nAfter login we can configure the router as our requirement.Here We created DCHP IP pool for each department and from the DHCP"),t("br"),e._v("\nserver to give automatic IP addresses to our hosts (End devices).")]),e._v(" "),t("p",[e._v("Fig:02 [OPNsense Admin panel]")]),e._v(" "),t("p",[t("img",{attrs:{src:s(307),alt:"OPNsense Admin panel"}})]),e._v(" "),t("h2",{attrs:{id:"step-03-distribution-layer-switch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-03-distribution-layer-switch"}},[e._v("#")]),e._v(" Step 03: (Distribution Layer - Switch):")]),e._v(" "),t("p",[e._v("In This step we connected our Router to the TP-Link Managed switch for creating our\nLAN (Local Area Network) by another straight through cable.")]),e._v(" "),t("p",[e._v("From this switch we created some VLAN (Virtual Local Area Network) for our\ndepartments such as - Admin, Management, Developers and Guests.\nVLAN 10 for Admin and their sub-network is 192.168.10.0/28, VLAN 20 Management and their sub-network is 192.168.20.0/26, VLAN 30 for Developers and their sub-network is 192.168.30.0/25, VLAN 40 for\nGuests and their sub-network is 192.168.40.0/26.")]),e._v(" "),t("p",[e._v("And then we connected our wireless access points to the TP-Link Managed switch for\nWLAN (Wireless Local Area Network) to access our devices wirelessly to the internet.")]),e._v(" "),t("p",[e._v("And Also we connected some IP Cameras directly to the TP-Link Managed switch. IP Cameras access IP (192.168.1.20-192.168.1.24)")]),e._v(" "),t("h2",{attrs:{id:"step-04-access-layer-access-points"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-04-access-layer-access-points"}},[e._v("#")]),e._v(" Step 04: (Access Layer - Access Points):")]),e._v(" "),t("p",[e._v("All our access points have 4 SSID (WiFi) such as -")]),e._v(" "),t("ul",[t("li",[e._v("InNeed.Cloud Admin")]),e._v(" "),t("li",[e._v("InNeed.Cloud Management")]),e._v(" "),t("li",[e._v("InNeed.Cloud Developers")]),e._v(" "),t("li",[e._v("InNeed.Cloud Guests")])]),e._v(" "),t("p",[e._v("In this step we can connect our end devices to the WiFi through these access points.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Thanks & Regards\nNazmul Islam\nCloud DevOps Engineer\nInNeed Cloud\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);