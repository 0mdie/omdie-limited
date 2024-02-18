import brasshinges from './brasshinges.webp';
import allen from './allen.jpg'
import artistb from './artistb.jpg'
import bedbolt from './bedbolt.jpg'
import blindrivet from './blindrivet.jpg'
import boltcutter from './boltcutter.webp'
import adjustable_spanner from './adjustable_spanner.jpg'
import bricktrowel from './bricktrowel.jpg'
import butterflyhinges from './butterflyhinges.jpg'
import cement from './cement.jpg'
import chainlink from './chainlink.jpg'
import chairnails from './chairnails.jpg'
import chickenwire from './chickenwire.jpg'
import chiselwood from './chiselwood.jpg'
import clawbar from './clawbar.jpeg'
import coffeetray from './coffeetray.jpg'
import crimpingtool from './crimpingtool.jpg'
import dogchains from './dogchains.jpg'
import dogpuller from './dogpuller.jpg'
import drawer from './drawer.jpg'
import faucets from './faucets.avif'
import fencescissors from './fencescissors.jpg'
import flapdisk from './flapdisk.jpg'
import forkjembe from './forkjembe.webp'
import gabionbox from './gabionbox.webp'
import galvanizedwire from './galvanizedwire.jpg'
import grindingdisk from './grindingdisk.jpg'
import gypsumscrew from './gypsumscrew.jpg'
import hacksaw from './hacksaw.avif'
import hammers from './hammers.webp'
import handgloves from './handgloves.jpg'
import handsaw from './handsaw.jpg'
import haspstaple from './haspstaple.jpg'
import helmets from './helmets.jpg'
import ironsheets from './ironsheets.webp'
import louvreframe from './louvreframe.png'
import masonrynails from './masonrynails.jpg'
import mortiselock from './mortiselock.jpg'
import mortisescrew from './mortisescrew.jpg'
import nutswasher from './nutswasher.webp'
import padlock from './padlock.jpg'
import paintbrush from './paintbrush.jpg'
import paints from './paints.jpg'
import panga from './panga.jpg'
import pipewrench from './pipewrench.jpg'
import pliers from './pliers.webp'
import plunger from './plunger.jpg'
import pocketbalance from './pocketbalance.jpg'
import rollerbrush from './rollerbrush.jpeg'
import sandpaper from './sandpaper.jpg'
import screwdriver from './screwdriver.jpg'
import siliconegun from './siliconegun.jpg'
import sinks from './sinks.jpg'
import slasher from './slasher.jpg'
import spadeshovel from './spadeshovel.jpg'
import spanners from './spanners.webp'
import spiritlevel from './spiritlevel.jpg'
import steelbars from './steelbars.jpg'
import steelbrush from './steelbrush.jpg'
import tapemeasure from './tapemeasure.avif'
import tilecutter from './tilecutter.jpg'
import toolbox from './toolbox.jpg'
import towerbolt from './towerbolt.jpg'
import watercan from './watercan.jpg'
import welding from './welding.jpg'
import weldingrod from './weldingrod.jpg'
import wheelbarrow from './wheelbarrow.webp'
import tiles from './tiles.jpg'


let products = [
    { name: 'Adjustable Spanner', image: adjustable_spanner },
    { name: 'Allen Keys', image: allen },
    { name: 'Artists Brush', image: artistb },
    { name: 'Brass Hinges', image: brasshinges },
    { name: 'Bed Bolts', image: bedbolt },
    { name: 'Blind Rivet', image: blindrivet },
    { name: 'Bolt Cutter', image: boltcutter },
    { name: 'Brick Trowel', image: bricktrowel },
    { name: 'Butterfly Hinges', image: butterflyhinges },
    { name: 'Cement', image: cement },
    { name: 'Chain Link', image: chainlink },
    { name: 'Chair Nails', image: chairnails },
    { name: 'Chicken Wire', image: chickenwire },
    { name: 'Chisel Wood', image: chiselwood },
    { name: 'Claw Bar', image: clawbar },
    { name: 'Coffee Tray', image: coffeetray },
    { name: 'Crimping Tool', image: crimpingtool },
    { name: 'Dog Chains', image: dogchains },
    { name: 'Door Puller', image: dogpuller },
    { name: 'Drawer Slide', image: drawer },
    { name: 'Faucets', image: faucets },
    { name: 'Fence Scissors', image: fencescissors },
    { name: 'Flap Disk', image: flapdisk },
    { name: 'Fork Jembe', image: forkjembe },
    { name: 'Gabion Box', image: gabionbox },
    { name: 'Galvanized Wire', image: galvanizedwire },
    { name: 'Grinding Disk', image: grindingdisk },
    { name: 'Gypsum Screw', image: gypsumscrew },
    { name: 'Hacksaw', image: hacksaw },
    { name: 'Hammers', image: hammers },
    { name: 'Hand Gloves', image: handgloves },
    { name: 'Hand Saw', image: handsaw },
    { name: 'Hasp Staple', image: haspstaple },
    { name: 'Helmets', image: helmets },
    { name: 'Iron Sheets', image: ironsheets },
    { name: 'Louvreframe', image: louvreframe },
    { name: 'Masonry Nails', image: masonrynails },
    { name: 'Mortise Lock', image: mortiselock },
    { name: 'Mortise Screw', image: mortisescrew },
    { name: 'Nuts & Washer', image: nutswasher },
    { name: 'Padlock', image: padlock },
    { name: 'Paint Brush', image: paintbrush },
    { name: 'Paints', image: paints },
    { name: 'Panga', image: panga },
    { name: 'Pipe Wrench', image: pipewrench },
    { name: 'Pliers', image: pliers },
    { name: 'Plunger', image: plunger },
    { name: 'Pocket Balance', image: pocketbalance },
    { name: 'Roller Brush', image: rollerbrush },
    { name: 'Sandpaper', image: sandpaper },
    { name: 'Screwdriver', image: screwdriver },
    { name: 'Silicone Gun', image: siliconegun },
    { name: 'Sinks', image: sinks },
    { name: 'Slasher', image: slasher },
    { name: 'Spade Shovel', image: spadeshovel },
    { name: 'Spanners', image: spanners },
    { name: 'Spirit Level', image: spiritlevel },
    { name: 'Steel Bars', image: steelbars },
    { name: 'Steel Brush', image: steelbrush },
    { name: 'Tape Measure', image: tapemeasure },
    { name: 'Tile Cutter', image: tilecutter },
    { name: 'Toolbox', image: toolbox },
    { name: 'Tower Bolt', image: towerbolt },
    { name: 'Water Can', image: watercan },
    { name: 'Welding Goggle', image: welding },
    { name: 'Welding Rod', image: weldingrod },
    { name: 'Wheelbarrow', image: wheelbarrow },
    { name: 'Tiles', image: tiles },
];


export default products
