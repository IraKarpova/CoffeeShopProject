$.ajax({
    url: 'https://opensheet.vercel.app/1gCrR6PuUhDZyNOF-9YpMHovYQdmgXjMxTS3y5IVUmhw/coffeeSheet',
    dataType: 'json',
    success: function (data) {
        console.log(data);
        $.each(data, function (key, drink) {
            console.log(drink.Title)
            $('#coffees').append(`<div class="col-md-3 mt-3 text-center" >
                    <img src="${drink.PicURL}" alt="${drink.Alt}" class="img-fluid rounded" >
                    <h3>${drink.Title}</h3>
                    <h4> ${drink.Price} €</h4>
                </div>`);
        })
    }
});