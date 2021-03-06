import React from "react";
import Link from "next/link";
import Image from "next/image";

const Prices = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Product Code</th>
            <th>Supplier</th>
            <th>Price Multiplier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A &amp; A Model</td>
            <td>AAM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Aber</td>
            <td>ABR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Academy</td>
            <td>ACD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>A Call to Arms</td>
            <td>CLL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Accurate Figures</td>
            <td>ACF</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Ace</td>
            <td>ACE</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>ADH Publishing</td>
            <td>ADH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Admiral</td>
            <td>ADM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Aerobonus</td>
            <td>ARB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Aeroplast</td>
            <td>ARP</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>AFV Club</td>
            <td>AFV</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Airfix</td>
            <td>ARF</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Aires</td>
            <td>ARS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Airframe Decals</td>
            <td>AFD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Airscale</td>
            <td>ASC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Airwaves</td>
            <td>ARW</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>AK Interactive</td>
            <td>AKI</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Albion Alloys</td>
            <td>ALB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>AML</td>
            <td>AML</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Ammo by Mig</td>
            <td>AMM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Amodel</td>
            <td>AMD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>AMP</td>
            <td>AMP</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Amusing Hobby</td>
            <td>AMS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Anigrand Craftswork</td>
            <td>ANG</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>AOA Decals</td>
            <td>AOA</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Aoshima</td>
            <td>ASH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Arma Hobby</td>
            <td>ARH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Armory</td>
            <td>ARO</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Armourfast</td>
            <td>ARM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Art Model</td> {/* confirmed  */}
            <td>ART</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Art Scale</td> {/* confirmed  */}
            <td>ARL</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Attack Kits</td>
            <td>ATT</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Authentic Details</td>
            <td>ATH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Avalon</td>
            <td>AVL</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>AVI Models</td>
            <td>AVM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Avis</td>
            <td>AVS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>AZ Models</td>
            <td>AZM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Azur</td> {/* confirmed  */}
            <td>AZR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Badger</td>
            <td>BGR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Bare-Metal</td> {/* confirmed  */}
            <td>BRM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Barracuda</td> {/* confirmed  */}
            <td>BRR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Begemot</td>
            <td>BGM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Blue Rider</td> {/* confirmed  */}
            <td>BLR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Brengun</td> {/* confirmed  */}
            <td>BRG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Bronco</td>
            <td>BRN</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>CAM</td>
            <td>CAM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Caeser Miniatures</td>
            <td>CSM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Carracal Decals</td>
            <td>CRC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Carrera</td>
            <td>CRR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Classic Airframes</td>
            <td>CLS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Clear Prop Models</td>
            <td>CLP</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Colorado </td> {/* confirmed  */}
            <td>CLR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Copper State Models </td> {/* confirmed  */}
            <td>CPP</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Czech Master Kits</td> {/* confirmed  */}
            <td>CMK</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Dapol</td>
            <td>EXP</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Dark Alliance</td>
            <td>DRK</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Das Werk</td>
            <td>DSW</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Dead Design Models</td>
            <td>DDM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>DK Decals</td>
            <td>DKD</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Dora Wings</td>
            <td>DRW</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Double Ugly</td>
            <td>DBU</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Dragon</td>
            <td>DRG</td>
            <td>Creative</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>Eagle Cal</td>
            <td>EGL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Easy Model</td>
            <td>ESY</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Echelon FD</td>
            <td>ECH</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Eduard</td>
            <td>EDR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Emhar</td>
            <td>EMH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Exito Decals</td>
            <td>EXT</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Expo Tools</td>
            <td>EXP</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>FCM</td>
            <td>FCM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>First to Fight</td>
            <td>WWH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Fly</td>
            <td>FYL</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Forces of Valor</td>
            <td>FOV</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Foxbot Decals</td>
            <td>FXB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Furball Aero-Design</td>
            <td>FRB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>GasPatch Models</td>
            <td>GSP</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Gaugemaster</td>
            <td>GGM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>H-Model Decals</td>
            <td>HMD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>HAD Models</td>
            <td>HAD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Hasegawa</td>
            <td>HSG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>HaT</td>
            <td>HAT</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Hataka</td>
            <td>HTK</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Hauler</td>
            <td>HLR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Heller</td>
            <td>HLL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>HGW</td>
            <td>HGW</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Hi Decal</td>
            <td>HDC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Hobby 2000</td>
            <td>H2k</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Hobbyboss</td>
            <td>HBB</td>
            <td>Creative</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>Hong Kong Models</td>
            <td>HKM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Humbrol</td>
            <td>HUM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>IBG Models</td>
            <td>IBG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>ICM</td>
            <td>ICM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Iliad Design</td>
            <td>ILD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>I LOVE KIT</td>
            <td>ILK</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>ION Model</td>
            <td>ION</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Infinity Models</td>
            <td>INF</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Italeri</td>
            <td>ITL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Kinetic</td>
            <td>KNT</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Kits-World</td>
            <td>KTS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Kitty Hawk</td>
            <td>KTT</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Kovozavody Prostejov</td>
            <td>KVZ</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>KV Models</td>
            <td>KVM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>LGB</td>
            <td>LGB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Lima November</td>
            <td>LNN</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Linear-A</td>
            <td>LNR</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Mach 2</td>
            <td>MCH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mac Distribution</td>
            <td>MCD</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Marivox</td>
            <td>MRV</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mark I Models</td>
            <td>MKM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mars</td>
            <td>MRS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Master Box</td>
            <td>MSB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Master Model</td>
            <td>MSM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Meng Models</td>
            <td>MNG</td>
            <td>Creative</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>Merit</td>
            <td>MRT</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Metallic Details</td>
            <td>MTL</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Micro-Mir</td>
            <td>MCM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Microscale</td>
            <td>MCR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mig Productions</td>
            <td>MIG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>MiniArt</td>
            <td>MNR</td>
            <td>Creative</td>
            <td>0.8</td>
          </tr>
          <tr>
            <td>Minicraft</td>
            <td>MCF</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mirage</td>
            <td>MRG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mirror Models</td>
            <td>MRR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mk.1 Design</td>
            <td>MKD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Model Alliance</td>
            <td>MDA</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Model Art</td>
            <td>MDA</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Model Maker Decals</td>
            <td>MDM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Modelmaster Decals</td>
            <td>MSD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Modelsvit</td>
            <td>MDS</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Moebius</td>
            <td>MBS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>MPC</td>
            <td>MPC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>MPM</td>
            <td>MPM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Mushroom Model Publications</td>
            <td>MSH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>NH Detail</td>
            <td>NHD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Orion</td>
            <td>ORN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>OWL</td>
            <td>OWL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Oxford</td>
            <td>OXF</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>P &amp; D Marsh</td>
            <td>PDM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Panda</td>
            <td>PND</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Pavla</td>
            <td>PVL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Peewit</td>
            <td>PEE</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Pegasus</td>
            <td>PGS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Perry Miniatures</td>
            <td>PRM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>PJ Productions</td>
            <td>PJP</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Planet</td>
            <td>PLN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Print Scale</td>
            <td>PRN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Quickboost</td>
            <td>QCK</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Quinta Studio</td>
            <td>QNT</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Red Box</td>
            <td>RDB</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>ResKit</td>
            <td>RSK</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Revell</td>
            <td>RVL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Riich Model</td>
            <td>RCH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Roden</td>
            <td>RDN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>RPM</td>
            <td>RPM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>RS Model</td>
            <td>RSM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Rubicon</td>
            <td>RBC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>SBS Model</td>
            <td>SBS</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Scale Aircraft Conversions</td>
            <td>SAC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Silver Wings</td>
            <td>SLW</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Smer</td>
            <td>SMR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Special Armour</td>
            <td>SA</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Special Hobby</td>
            <td>SPC</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Star Decals</td>
            <td>STD</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Stransky Models</td>
            <td>STN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Strelets</td>
            <td>STR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Swan Morton</td>
            <td>SWM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Sword</td>
            <td>SWR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Takom</td>
            <td>TKM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Tamiya</td>
            <td>TMY</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Techmod</td>
            <td>TCH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>The Army Painter</td>
            <td>TPN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>The Plastic Soldier</td>
            <td>TPS</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>The World at War</td>
            <td>WAW</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Thunder Models</td>
            <td>THN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Thunderbird Models</td>
            <td>TBM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Tiger Models</td>
            <td>TGR</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Tigerhead Decal</td>
            <td>TGH</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>TopNotch</td>
            <td>TNM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>True Details</td>
            <td>TRD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Trumpeter</td>
            <td>TRM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>UGears</td>
            <td>UGG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>UM-MT</td>
            <td>UMT</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Unimat</td>
            <td>UMM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Unimodel</td>
            <td>UNI</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Vallejo</td>
            <td>VLL</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Valom</td>
            <td>VLM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Vingtor</td>
            <td>VNG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Warlord Games</td>
            <td>WLG</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Warpaint Series</td>
            <td>WRP</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Waterloo</td>
            <td>WLO</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Wingman Models</td>
            <td>WNM</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Wingnut Wings</td>
            <td>WGN</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Xtradecal</td>
            <td>XTD</td>
            <td>Hannants</td>
            <td>0.9</td>
          </tr>
          <tr>
            <td>Yahu Models</td>
            <td>YHM</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Zebrano</td>
            <td>ZBR</td>
            <td>Hannants</td>
            <td>1.21</td>
          </tr>
          <tr>
            <td>Zvezda</td>
            <td>ZVZ</td>
            <td>Creative</td>
            <td>0.8</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default Prices;
