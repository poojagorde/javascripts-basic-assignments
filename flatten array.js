<script>
    // Creating multilevel array
    const numbers = [['1', '2'], ['3', '4',
                     ['5',['6'], '7']]];
  
    const flatNumbers= numbers.flat(Infinity);
    document.write(flatNumbers);
</script>