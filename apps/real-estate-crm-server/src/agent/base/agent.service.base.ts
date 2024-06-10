/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Agent as PrismaAgent,
  Appointment as PrismaAppointment,
} from "@prisma/client";

export class AgentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.AgentCountArgs, "select">): Promise<number> {
    return this.prisma.agent.count(args);
  }

  async agents<T extends Prisma.AgentFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentFindManyArgs>
  ): Promise<PrismaAgent[]> {
    return this.prisma.agent.findMany<Prisma.AgentFindManyArgs>(args);
  }
  async agent<T extends Prisma.AgentFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentFindUniqueArgs>
  ): Promise<PrismaAgent | null> {
    return this.prisma.agent.findUnique(args);
  }
  async createAgent<T extends Prisma.AgentCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentCreateArgs>
  ): Promise<PrismaAgent> {
    return this.prisma.agent.create<T>(args);
  }
  async updateAgent<T extends Prisma.AgentUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentUpdateArgs>
  ): Promise<PrismaAgent> {
    return this.prisma.agent.update<T>(args);
  }
  async deleteAgent<T extends Prisma.AgentDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AgentDeleteArgs>
  ): Promise<PrismaAgent> {
    return this.prisma.agent.delete(args);
  }

  async findAppointments(
    parentId: string,
    args: Prisma.AppointmentFindManyArgs
  ): Promise<PrismaAppointment[]> {
    return this.prisma.agent
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .appointments(args);
  }
}
