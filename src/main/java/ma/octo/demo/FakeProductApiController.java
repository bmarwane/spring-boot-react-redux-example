package ma.octo.demo;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(value = "/api")
public class FakeProductApiController {

    private List<Product> products = new ArrayList<>();


    @PostMapping(value = "/products/save", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<Product> saveProduct(@RequestBody Product product) {

        products.add(product);

        return new ResponseEntity<>(product, OK);
    }
    @GetMapping(value = "/products/all", produces = APPLICATION_JSON_VALUE)
    @ResponseStatus(OK)
    public ResponseEntity<List<Product>> saveProduct() {
        return new ResponseEntity<>(products, OK);
    }

}
