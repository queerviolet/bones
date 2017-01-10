var expect = require('chai').expect;
var Rock = require('APP/db/models/rock');
var db = require('APP/db');

describe('The `Rock` model', function () {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync);


  /**
   * Next, we create an (un-saved!) address instance before every spec
   */
  var name = 'Best Rock';
  var photo = 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTUvZcCO4eS5YiWaMPUIqshglRM1ZgX-Ff7zv2oSW3OYb0lWBrT';
  var price = '4.30';
  var weight = '7.3';
  var color = 'grey';
  var description = 'This is the most beautiful rock in the world.';
  var stock = '99';

  var rock;
  beforeEach(function(){
    rock = Rock.build({
      name,
      photo,
      price,
      weight,
      color,
      description,
      stock
    });
  });

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return (Rock.truncate({ cascade: true }))
  });

  describe('attributes definition for Rock', function() {

    it('includes `name`, `photo`, `price`, `weight`, `color`, `description`, `stock` fields', function () {

      return rock.save()
      .then(function (savedRock) {
        expect(savedRock.name).to.equal(name);
        expect(savedRock.photo).to.equal(photo);
        expect(savedRock.price).to.equal(price);
        expect(savedRock.weight).to.equal(weight);
        expect(savedRock.color).to.equal(color);
        expect(savedRock.description).to.equal(description);
        expect(savedRock.stock).to.equal(stock);
      });

    });

    describe('attribute validations are valid', function() {
      it('requires `name`', function () {

        rock.name = null;

        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('name cannot be null');
        });

      });
      it('requires `photo`', function () {

        rock.photo = null;

        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          console.log(result.message)
          expect(result.message).to.contain('city cannot be null');
        });

      });
      it('requires `state`', function () {

        rock.state = null;

        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('state cannot be null');
        });

      });
      it('requires `zipcode`', function () {

        rock.zipcode = null;

        return rock.validate()
        .then(function(result) {
          expect(result).to.be.an.instanceOf(Error);
          expect(result.message).to.contain('zipcode cannot be null');
        });
      });
    });
  });
});
