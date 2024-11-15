import { Injectable, NotFoundException } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class ChivasService {
  private readonly filePath: string;
  private chivas: any[];

  constructor() {
    this.filePath = path.join(process.cwd(), 'data', 'MOCK_DATA.json');
    const fileContents = fs.readFileSync(this.filePath, 'utf8');
    this.chivas = JSON.parse(fileContents);
  }

  findAll() {
    return this.chivas;
  }

  create(newChiva: { id: number; first_name: string; email: string }) {
    this.chivas.push(newChiva);
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(this.chivas, null, 2),
      'utf8',
    );
    return newChiva;
  }

  update(id: number, updatedChiva: { first_name?: string; email?: string }) {
    const idNumber = Number(id);
    const chivaIndex = this.chivas.findIndex((chiva) => chiva.id === idNumber);
    if (chivaIndex === -1) {
      throw new NotFoundException(`Chiva with id ${id} not found`);
    }
    this.chivas[chivaIndex] = { ...this.chivas[chivaIndex], ...updatedChiva };
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(this.chivas, null, 2),
      'utf8',
    );
    return this.chivas[chivaIndex];
  }

  delete(id: number) {
    const chivaIndex = this.chivas.findIndex((chiva) => chiva.id === id);
    if (chivaIndex === -1) {
      throw new NotFoundException(`Chiva with id ${id} not found`);
    }

    const deletedChiva = this.chivas.splice(chivaIndex, 1);
    fs.writeFileSync(
      this.filePath,
      JSON.stringify(this.chivas, null, 2),
      'utf8',
    );
    return deletedChiva[0];
  }
}
