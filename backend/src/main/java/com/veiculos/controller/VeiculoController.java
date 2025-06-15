package com.veiculos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.veiculos.entity.Veiculo;
import com.veiculos.repository.VeiculoRepository;
import com.veiculos.service.VeiculoService;


@RestController
@RequestMapping("/veiculos")
@CrossOrigin(origins = "*")

public class VeiculoController {

    private final VeiculoRepository veiculoRepository;

    @Autowired
    private VeiculoService veiculoService;

    VeiculoController(VeiculoRepository veiculoRepository) {
        this.veiculoRepository = veiculoRepository;
    }

    @GetMapping
    public List<Veiculo> listar() {

        return veiculoService.listarVeiculos();

    }

    @PostMapping
    public Veiculo criar(@RequestBody Veiculo v) {
        return veiculoService.salvar(v);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Veiculo> buscarPorId(@PathVariable Long id) {
        return veiculoRepository.findById(id)
                .map(veiculo -> ResponseEntity.ok().body(veiculo))
                .orElse(ResponseEntity.notFound().build());
    }

    // @GetMapping("/{id}")
    // public Veiculo atualizar(@PathVariable Long id, @RequestBody Veiculo v) {
    // return veiculoService.atualizarVeiculo(id, v);
    // }
    @PutMapping("/{id}")
    public ResponseEntity<Veiculo> atualizar(@PathVariable Long id, @RequestBody Veiculo v) {
        Veiculo atualizado = veiculoService.atualizarVeiculo(id, v);
        return ResponseEntity.ok(atualizado);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) throws Exception {
        veiculoService.deletar(id);
        return ResponseEntity.noContent().build();
    }

    // @DeleteMapping("/{id}")
    // public void deletar(Long id) throws Exception {
    // veiculoService.deletar(id);
    // }

}
