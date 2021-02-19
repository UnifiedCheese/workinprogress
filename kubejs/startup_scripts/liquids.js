events.listen('fluid.registry', function (event) {
    event.create('molten_iron').textureThick(0xfcff42).displayName('Molten Iron').density(5000).bucketColor(0xfcff42)
    event.create('impure_molten_iron').textureThick(0xffd700).displayName('Impure Molten Iron').density(5000).bucketColor(0xffd700)
    event.create('low_carbon_molten_iron').textureThick(0xffd600).displayName('Low Carb Iron').density(5000).bucketColor(0xffd600)
    event.create('molten_steel').textureThick(0xffd800).displayName('Molten Steel').density(5000)
    event.create('gravy').textureThick(0x472f26).displayName('Gravy').density(5000)
    event.create('broth').textureThick(0x7a5140).displayName('Broth').density(5000)
    
    
  })