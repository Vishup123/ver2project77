var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://i.postimg.cc/qqyYvVbq/grandpa.jpg", "https://i.postimg.cc/wjMnFtMX/father.jpg" , "https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book","Ramakant Pawar", "Urmila Pawar", "Vaishnavi Pawar", "Alisha Pawar"];
var i = 0;
function update()
{
    
    
 
    document.getElementById("family_member_image").src = images[i];
    document.getElementById("family_member_name").innerHTML = names[i];

    i++;
    var numbers_of_family_member_in_array = 5
    if(i > names.length)
      {
          i = 0;
      }
    
}

