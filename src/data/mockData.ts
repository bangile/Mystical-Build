import { Project, ServiceExpertise, BeforeAfterItem, Testimonial, ProcessStep } from '../types';

export const BUSINESS_INFO = {
  name: 'Mystical Construction And Renovation',
  shortName: 'Mystical Build',
  tagline: 'Premier Construction, Architectural Renovations & Building Materials in Pretoria',
  address: '259 Ketjen Street, Pretoria West, Pretoria, 0183, South Africa',
  city: 'Pretoria',
  province: 'Gauteng',
  country: 'South Africa',
  phonePrimary: '061 860 7883',
  phonePrimaryIntl: '+27618607883',
  phoneSecondary: '067 855 2358',
  phoneSecondaryIntl: '+27678552358',
  phoneAlternate: '073 260 3196',
  phoneAlternateIntl: '+27732603196',
  email: 'phillipconstruction7@gmail.com',
  emailSecondary: 'mysticalconstruction2@gmail.com',
  hours: 'Monday – Friday: 08:00 – 17:00 | Saturday: 08:00 – 14:00',
  googleMapsUrl: 'https://www.google.com/maps/place/Mystical+Construction+And+Renovation/@-25.7475519,28.1650891,17z/data=!3m1!4b1!4m6!3m5!1s0x1e956363c39dd413:0xcfd632d87dd9f1dd!8m2!3d-25.7475519!4d28.1650891!16s%2Fg%2F11vrxkkmd8!5m1!1e1',
  whatsappUrl: 'https://wa.me/27618607883?text=Hello%20Mystical%20Construction,%20I%20would%20like%20to%20request%20a%20quotation%20for%20a%20construction%20/%20renovation%20project.',
  coordinates: {
    lat: -25.7475519,
    lng: 28.1650891
  },
  serviceAreas: [
    'Pretoria West & Central',
    'Pretoria East & Waterkloof',
    'Centurion & Midstream',
    'Midrand & Waterfall',
    'Johannesburg North & Sandton',
    'Greater Gauteng'
  ]
};

export const STATS = [
  { value: '180+', label: 'PROJECTS DELIVERED', sub: 'Completed across Pretoria & Gauteng' },
  { value: '15+', label: 'YEARS EXPERIENCE', sub: 'Master structural engineering & build' },
  { value: '100%', label: 'FREE QUOTATIONS', sub: 'Accurate estimates & on-site assessments' },
  { value: '5-STAR', label: 'CLIENT RATING', sub: 'Verified Google & local community reviews' },
];

export const SERVICES: ServiceExpertise[] = [
  {
    id: 'new-house-construction',
    icon: 'home',
    title: 'New House Construction',
    tagline: 'Turnkey Residential Builds & Estates',
    description: 'Complete new home construction from foundation trenching and structural concrete slabs to SABS brickwork, roof trusses, and luxury turnkey finishes.',
    features: [
      'Engineered foundation & reinforced concrete slabs',
      'Structural brickwork, lintels & load-bearing masonry',
      'Timber trusses, tiled & chromadek metal roofing',
      'NHBRC standards & municipal compliance certification'
    ],
    badge: 'Core Service'
  },
  {
    id: 'custom-renovations-extensions',
    icon: 'renovate',
    title: 'Home Renovations & Alterations',
    tagline: 'Modern Living Transformations & Additions',
    description: 'Transformative home renovations, room extensions, open-plan structural alterations, luxury designer kitchens, and modern bathroom refurbishments.',
    features: [
      'Load-bearing wall removal & steel beam installation',
      'Room extensions, granny flats & second-storey additions',
      'Modern open-plan kitchen & luxury bathroom makeovers',
      'Wall crack repairs, structural underpinning & damp-proofing'
    ],
    badge: 'Popular'
  },
  {
    id: 'roofing-ceilings-waterproofing',
    icon: 'shield',
    title: 'Roofing, Ceilings & Waterproofing',
    tagline: 'Complete Weatherproof Protection & Interiors',
    description: 'Expert roof construction, timber trusses, tile repairs, RhinoBoard & suspended ceiling installations, decorative bulkheads, and torch-on waterproofing.',
    features: [
      'New timber truss design, installation & tile/IBR sheeting',
      'RhinoBoard ceilings, cornices & modern LED bulkheads',
      'Suspended commercial ceilings & acoustic drywalling',
      'Torch-on concrete slab waterproofing & leak remediation'
    ],
    badge: 'Specialized'
  },
  {
    id: 'plastering-painting-paving',
    icon: 'layers',
    title: 'Plastering, Painting & Paving',
    tagline: 'Premium Finishes, Textures & Hardscaping',
    description: 'Flawless RhinoLite smooth plastering, textured exterior finishes, premium interior/exterior painting, and durable interlocking paving for driveways.',
    features: [
      'Smooth interior RhinoLite skim plaster & scratch finishes',
      'UV-resistant exterior waterproofing & architectural painting',
      'Interlocking block paving, clay brick driveways & kerbing',
      'Concrete walkways, boundary walls & patio construction'
    ]
  },
  {
    id: 'aluminum-doors-windows',
    icon: 'building',
    title: 'Aluminium Doors & Windows',
    tagline: 'Custom Architectural Stacking & Glazing Systems',
    description: 'Custom manufacture, supply, and precision installation of aluminium sliding doors, fold-and-stack systems, security frames, and modern shopfronts.',
    features: [
      'Fold-and-stack aluminium patio doors (up to 8 panels)',
      'Modern energy-efficient double-glazed aluminium windows',
      'Security gates, heavy-duty aluminium entrance doors',
      'Commercial shopfronts & interior glass partitioning'
    ]
  },
  {
    id: 'plumbing-electrical-solar',
    icon: 'zap',
    title: 'Electrical, Plumbing & Solar Backup',
    tagline: 'Certified Installations & Sustainable Utilities',
    description: 'Full electrical wiring with COC certification, backup solar & inverter integrations, plumbing drainage, geysers, and complete water reticulation.',
    features: [
      'Complete home electrical re-wiring & DB board upgrades',
      'Electrical Certificate of Compliance (COC) sign-offs',
      'Solar PV panel & Lithium battery backup inverter systems',
      'Geyser installations, pressure valves & drainage piping'
    ]
  },
  {
    id: 'building-materials-supply',
    icon: 'truck',
    title: 'Building Materials Supply',
    tagline: 'Direct-to-Site Bulk Aggregates & Bricks',
    description: 'Direct delivery of quality building aggregates, sand, and masonry materials across Pretoria and Gauteng at competitive contractor rates.',
    features: [
      'Plaster sand, river sand, building sand & filling sand',
      'Pre-mixed concrete aggregates & crushed stone (19mm)',
      'Cement stock bricks, clay maxi bricks & hollow concrete blocks',
      'Prompt tipper-truck delivery directly to your building site'
    ],
    badge: 'Direct Supply'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'the-waterkloof-horizon-estate',
    title: 'The Waterkloof Horizon Residence',
    category: 'residential',
    categoryLabel: 'Luxury Residential Build',
    completionYear: '2023',
    badge: 'Completed 2023',
    location: 'Waterkloof Ridge, Pretoria',
    sqft: '780 m²',
    duration: '14 Months',
    description: 'A contemporary luxury architectural residence built on a sloping Pretoria hillside, featuring reinforced concrete cantilevered slabs, black aluminium folding stack doors, an integrated solar backup farm, and an infinity pool deck.',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80'
    ],
    architecturalHighlights: [
      'Heavy reinforced concrete raft foundation & suspended slabs',
      'Charcoal powder-coated aluminium multi-stacking patio systems',
      'Smooth RhinoLite skimming throughout with integrated LED cove bulkheads',
      '15kVA 3-Phase hybrid solar inverter system with battery bank'
    ],
    materials: ['High-Strength Concrete 30MPa', 'SABS Stock Bricks', 'Anodized Charcoal Aluminium', 'Polished Porcelain Tiles'],
    client: 'Private Executive Family',
    featured: true
  },
  {
    id: 'menlyn-corporate-atrium',
    title: 'Menlyn Corporate Atrium & Offices',
    category: 'commercial',
    categoryLabel: 'Commercial Build & Partitioning',
    completionYear: '2024',
    badge: 'Completed 2024',
    location: 'Menlyn Maine, Pretoria',
    sqft: '3,800 m²',
    duration: '18 Months',
    description: 'Comprehensive commercial construction and interior drywall partitioning for a multi-tenant business hub, including acoustic suspended ceilings, executive glass boardrooms, and commercial paving.',
    coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80'
    ],
    architecturalHighlights: [
      'Heavy-traffic interlocking commercial paving & drainage',
      'Acoustic drywall partitioning and fire-rated glass panels',
      'Industrial electrical reticulation & commercial COC sign-off',
      'Suspended grid ceiling system with integrated climate vents'
    ],
    materials: ['Heavy Interlocking Paving 80mm', 'Acoustic Drywall 15mm', 'Tempered Safety Glass', 'Structural Steel'],
    client: 'Commercial Property Group',
    featured: true
  },
  {
    id: 'silver-lakes-modern-overhaul',
    title: 'Silver Lakes Golf Estate Overhaul',
    category: 'renovation',
    categoryLabel: 'Full House Renovation',
    completionYear: '2023',
    badge: 'Completed 2023',
    location: 'Silver Lakes Estate, Pretoria East',
    sqft: '520 m²',
    duration: '6 Months',
    description: 'Complete transformation of an enclosed 1990s golf estate property into a bright, open-plan entertainer’s paradise with removed load-bearing brick walls, new timber roof trusses, and modern tiling.',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80'
    ],
    architecturalHighlights: [
      'Removal of 3 internal structural walls with RSJ steel beam installation',
      'Seamless 1200x600mm porcelain tile installation across 350m²',
      'Custom aluminium stacking doors leading to covered braai patio',
      'Total roof re-sealing, waterproofing, and charcoal coating'
    ],
    materials: ['Porcelain Large-Format Tile', 'Universal Steel Beams', 'RhinoLite Skim', 'Charcoal Roof Coating'],
    client: 'Private Homeowner',
    featured: true
  },
  {
    id: 'steyn-city-monolith-villa',
    title: 'The Steyn City Modernist Villa',
    category: 'luxury-estates',
    categoryLabel: 'Bespoke Luxury Estate',
    completionYear: '2024',
    badge: 'Completed 2024',
    location: 'Steyn City, Gauteng',
    sqft: '950 m²',
    duration: '16 Months',
    description: 'Contemporary architectural masterpiece built with precision concrete formwork, soaring double-volume ceilings, fluted feature walls, and seamless indoor-outdoor living integration.',
    coverImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
    ],
    architecturalHighlights: [
      'Double-volume entrance hall with engineered concrete slab cantilever',
      'Motorized aluminium cavity sliding door systems',
      'Luxury master bathroom with frameless glass and free-standing tub',
      'Full home automation, solar inverter system, and smart geysers'
    ],
    materials: ['Architectural Face Brick', 'Honed Travertine', 'Custom Aluminium Profiles', 'Hardwood Decking'],
    client: 'Private Investor'
  },
  {
    id: 'centurion-residential-expansion',
    title: 'Centurion Double-Storey Extension',
    category: 'residential',
    categoryLabel: 'Residential Extension',
    completionYear: '2023',
    badge: 'Completed 2023',
    location: 'Centurion Golf Estate, Centurion',
    sqft: '420 m²',
    duration: '5 Months',
    description: 'Seamless double-storey wing addition incorporating 3 ensuite bedrooms, a home theater room, a new Chromadek pitched roof, and complete exterior repainting.',
    coverImage: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1600&q=80'
    ],
    architecturalHighlights: [
      'Beam-and-block suspended concrete slab for second storey',
      'Custom timber roof trusses tied into existing roofline',
      'High-grade thermal ceiling insulation and RhinoBoard finishes',
      'Plumbing extension with gas geyser integration'
    ],
    materials: ['Pre-stressed Concrete Lintels', 'Maxi Bricks', 'Chromadek Charcoal Sheeting', 'RhinoBoard 9.5mm'],
    client: 'Family Homeowner'
  },
  {
    id: 'sandton-skyline-penthouse-renovation',
    title: 'Sandton Sky Penthouse Refurbishment',
    category: 'renovation',
    categoryLabel: 'Penthouse Renovation',
    completionYear: '2024',
    badge: 'Completed 2024',
    location: 'Sandton CBD, Johannesburg',
    sqft: '360 m²',
    duration: '4 Months',
    description: 'High-end interior renovation featuring designer bulkheads with ambient strip lighting, custom kitchen joinery, frameless glass showers, and herringbone timber vinyl flooring.',
    coverImage: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&q=80'
    ],
    architecturalHighlights: [
      'Curved drywall bulkheads with recessed dimmable smart LEDs',
      'Waterproof vinyl plank flooring over acoustic underlayment',
      'Custom quartz kitchen countertops with waterfall end panels',
      'Complete electrical modernization with smart touch switches'
    ],
    materials: ['Engineered Quartz', 'Acoustic Vinyl Planks', 'Fluted Glass', 'Venetian Plaster'],
    client: 'Corporate Executive'
  }
];

export const BEFORE_AFTER_ITEMS: BeforeAfterItem[] = [
  {
    id: 'heritage-modern-pretoria',
    title: '1980s Outdated Brick House to Modernist Masterpiece',
    location: 'Waterkloof Ridge, Pretoria',
    category: 'Full House Renovation & Extension',
    description: 'We removed heavy dividing internal brick walls, installed structural steel lintels, raised the ceiling line, and installed 8-meter charcoal aluminium stacking doors opening out onto a new paved pool terrace.',
    beforeImage: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    duration: '4.5 Months',
    keyUpgrades: [
      'Removed 4 non-loadbearing & 2 structural walls with I-beams',
      'Installed full-width aluminium stacking door systems',
      'New Chromadek roof with high-spec ceiling insulation',
      'Re-paved 280 m² driveway with charcoal bevel paving blocks'
    ]
  },
  {
    id: 'dark-kitchen-to-open-braai-room',
    title: 'Enclosed Kitchen to Open-Concept Culinary & Braai Lounge',
    location: 'Pretoria East, Gauteng',
    category: 'Kitchen & Living Overhaul',
    description: 'Transformed an enclosed, low-ceiling 1990s kitchen and patio into an integrated indoor-outdoor culinary and entertaining hub with custom quartz countertops and RhinoLite bulkheads.',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    duration: '7 Weeks',
    keyUpgrades: [
      'Eliminated enclosing brick partition walls',
      'Built-in stainless steel braai with extraction canopy',
      'High-gloss soft-close cabinetry with quartz waterfall island',
      'Modern LED recessed bulkheads and porcelain tiling'
    ]
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Free On-Site Consultation & Quote',
    subtitle: 'Pretoria & Gauteng site inspection',
    description: 'We meet you on-site at your property anywhere in Pretoria or Gauteng to inspect ground conditions, measure dimensions, assess blueprints, and provide an accurate, transparent free quotation.',
    deliverables: ['Detailed Bill of Quantities (BOQ)', 'Free Comprehensive Quote', 'Timeline & Material Estimates'],
    durationEstimate: '1 – 3 Days'
  },
  {
    stepNumber: '02',
    title: 'Planning, Approvals & Material Sourcing',
    subtitle: 'Architectural coordination & logistics',
    description: 'We finalize structural details, coordinate municipal plans where required, and deliver certified SABS-approved building materials and bricks directly to your site.',
    deliverables: ['Project Milestone Schedule', 'Material Delivery Logistics', 'Site Preparation & Safety Setup'],
    durationEstimate: '1 – 2 Weeks'
  },
  {
    stepNumber: '03',
    title: 'Precision Construction & Master Craftsmanship',
    subtitle: 'Supervised building, roofing & installations',
    description: 'Our experienced bricklayers, carpenters, electricians, plumbers, and plasterers execute every phase under strict on-site supervision and NHBRC building standards.',
    deliverables: ['Daily / Weekly Progress Updates', 'Structural Milestone Inspections', 'Dedicated Site Foreman'],
    durationEstimate: 'Scope Dependent'
  },
  {
    stepNumber: '04',
    title: 'Quality Finishing, Snagging & Turnkey Handover',
    subtitle: 'Flawless finishes & COC certification',
    description: 'Comprehensive cleaning, detailed snagging inspection, sign-off of Electrical & Plumbing Certificates of Compliance (COC), and guaranteed warranty handover.',
    deliverables: ['Final Snag-Free Inspection', 'Electrical & Plumbing COCs', 'Workmanship Guarantee'],
    durationEstimate: 'Turnkey Handover'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Mark S.',
    role: 'Homeowner, Waterkloof Ridge',
    project: 'Full House Renovation & Roofing',
    quote: 'Mystical Construction completely transformed our Waterkloof home. Phillip and the team were punctual, transparent with costs in Rands, and completed our roofing and aluminium doors ahead of schedule. Outstanding workmanship in Pretoria!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
    year: '2023'
  },
  {
    id: '2',
    name: 'Kimberly K',
    role: 'Property Investor, Centurion',
    project: 'New House Build & Paving',
    quote: 'From foundation casting to the final plastering and painting, Mystical Build delivered exceptional quality. Having them supply the bricks and sand directly saved us thousands. Highly recommended for any building project in Gauteng!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    year: '2023'
  },
  {
    id: '3',
    name: 'Tiaan B.',
    role: 'Commercial Operations Manager, Menlyn',
    project: 'Office Partitioning & Ceilings',
    quote: 'We hired Mystical Construction for commercial drywall partitioning and suspended ceilings in Menlyn. The attention to acoustic detail and neatness was world-class. Free quotation was spot-on with no hidden surprise costs.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
    year: '2024'
  }
];

export const BUILDING_MATERIALS_LIST = [
  { name: 'Plaster Sand', unit: 'Per m³ / Cubic Metre or Tipper Load', description: 'Fine, washed sand ideal for smooth interior RhinoLite and exterior plastering.' },
  { name: 'River Sand / Building Sand', unit: 'Per m³ / Tipper Load', description: 'Clean, coarse sand for strong bricklaying mortar and general concrete mixing.' },
  { name: 'Concrete Mix & 19mm Stone', unit: 'Per m³ / Bulk Load', description: 'Graded crushed stone and aggregate for foundations, driveways, and slabs.' },
  { name: 'Cement Stock Bricks', unit: 'Per 1,000 Bricks / Pallet', description: 'High compressive strength cement stock bricks for durable structural masonry.' },
  { name: 'Clay Maxi & Block Bricks', unit: 'Per 1,000 Bricks / Pallet', description: 'Cost-effective maxi bricks and hollow blocks for fast, sturdy wall construction.' },
  { name: 'Filling Sand (G5 / G7 Soil)', unit: 'Per Tipper Load', description: 'High-density compaction filling sand for solid sub-base foundations and paving.' }
];
