package utn.lab4.tp1.Controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import utn.lab4.tp1.Entity.Instrumento;
import utn.lab4.tp1.Service.InstrumentoService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/instrumentos")
@CrossOrigin(origins = "*")
public class InstrumentoController {
    @Autowired//Enlazamos servicio
    private final InstrumentoService instrumentoService;

    public InstrumentoController(InstrumentoService instrumentoService) {
        this.instrumentoService = instrumentoService;
    }


    @GetMapping("/")
    public List<Instrumento> getAll(){
        return instrumentoService.getInstrumentos();

    }

    @GetMapping("/{instrumentoId}")
    public Optional<Instrumento> getById(@PathVariable("instrumentoId") Long instrumentoId){
        return instrumentoService.getInstrumento(instrumentoId);
    }

    @DeleteMapping ("/{instrumentoId}")
    public void saveUpdate(@PathVariable("instrumentoId") Long instrumentoId){
        instrumentoService.deleteinstrumento(instrumentoId);
    }

    @PostMapping("/")
    public void saveUpdate(@RequestBody Instrumento instrumento){

        instrumentoService.saveOrUpdateinstrumento(instrumento);
    }
}