const tellFortune = function(childrenNo, partnerName, location, jobTitle) {
    console.log('You will be a ' + jobTitle + ' in ' + location + ', and married to ' 
        + partnerName + ' with', childrenNo + ' kids.' );
}

tellFortune(2, 'Nathalie', 'Haarlem', 'Web-Developer');
tellFortune(4, 'Steef', 'Utrecht', 'Chef-Cook' );
tellFortune(6, 'Gertha', 'Urk', 'Mormon');