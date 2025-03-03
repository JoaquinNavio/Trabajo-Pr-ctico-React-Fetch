package utn.lab4.tp1.Entity;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name ="instrumentos")
@CrossOrigin(origins = "*")
@Getter
@Setter
public class Instrumento {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String instrumento;
    private String marca;
    private String modelo;
    private String imagen;
    private Double precio;
    private String costo_envio;
    private int cantidad_vendida;
    private String descripcion;
}
