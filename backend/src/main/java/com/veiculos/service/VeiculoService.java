package com.veiculos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.veiculos.entity.Veiculo;
import com.veiculos.repository.VeiculoRepository;


@Service
public class VeiculoService {

    @Autowired
    private VeiculoRepository veiculoRepo;

    public List<Veiculo> listarVeiculos(){
        return veiculoRepo.findAll();
    }

    public Veiculo salvar(Veiculo v){
        return veiculoRepo.save(v);
    }
    public Veiculo atualizarVeiculo (Long id, Veiculo v){
        Veiculo existente = veiculoRepo.findById(id).orElseThrow();
        existente.setModelo(v.getModelo());
        existente.setMarca(v.getMarca());
        existente.setAno(v.getAno());
        existente.setCor(v.getCor());
        return veiculoRepo.save(existente);
            
    }

    public void deletar(Long id) throws Exception{
        if (id == null) {
            throw new IllegalArgumentException("O ID não pode ser nulo");
        }
        veiculoRepo.deleteById(id);
    }
        // try{
        //     veiculoRepo.deleteById(id);    
        // }
        // catch(Exception e){
            
        //     throw new Exception( "erro apresentado: " +e);

        // }
        
    }



    

