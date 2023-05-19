

$(() => {
	$("#container")
    let $h1 = $("<h1></h1>").text("Hogwarts")
    $("body").append($h1)
    let $h2 = $("<h2>Ronard Nyongkah</h2>")
    let $h3 = $("<h3>Slytherin</h3>")
    let $h4 = $("<h4>AntMan</h4>").attr("class","dog")
    let $wand = $("<h4>Ronard's wand is wandith</h4>")

    $("body").append($h2)
    $("body").append($h3)
    $("body").append($h4)
    $("body").append($wand)

    $("body").append($(`<ul> 
    <li>butter beer</li> 
    <li class = secret>invisibility cloak </li> 
    <li class = secret>magic map</li> 
    <li class = secret>time turner </li> 
    <li class = dog>leash</li> 
    <li> Bertie Bott's Every Flavor [Jelly] Beans</li> 
    </ul>`).attr("storage","trunk"))

    $("body").append("<h5>Spring 2017</h5>")

    $("body").append(`<table>
        <thead>
            <tr>
                <th >Day</th>
                <th >Classes</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Monday</td>
                <td>Herbology, Divination, History of Magic, Charms, Potions</td>
            </tr> 
            <tr>
                <td>Tuesday</td>
                <td>Herbology, Divination, History of Magic, Charms, Potions</td>
            </tr> 
            <tr>
                <td>Wednesday</td>
                <td>Herbology, Divination, History of Magic, Charms, Potions</td>
            </tr> 
            <tr>
                <td>Thursday</td>
                <td>Herbology, Divination, History of Magic, Charms, Potions</td>
            </tr> 
            <tr>
                <td>Friday</td>
                <td>Herbology, Divination, History of Magic, Charms, Potions</td>
            </tr>
        </tbody>
    </table>`)



});


